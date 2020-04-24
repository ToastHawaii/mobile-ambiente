import { Howl } from "howler";
import { LiteEvent } from "../../LiteEvent";
import * as jsmediatags from "jsmediatags";
import { FileEntity, ThingEntity, SoundEntity } from "../Entities";
import { ThingModel } from "./ThingModel";

export class SoundModel {
  public thing: ThingModel;
  public name: string;
  public emoji: string;
  public type: string;
  private readonly onStateChange = new LiteEvent<"play" | "stop">();
  public get OnStateChange() {
    return this.onStateChange.expose();
  }
  private _state: "play" | "stop";
  public get state(): "play" | "stop" {
    return this._state;
  }
  private _volume: number = 1.0;
  public get volume(): number {
    return this._volume;
  }
  public set volume(value: number) {
    this._volume = value;
    for (const file of this.files) {
      file.howl.volume(this._volume * (file.volume || 1.0));
    }
  }
  private files: ({
    howl: Howl;
    loop: boolean;
  } & FileEntity)[] = [];
  constructor(thingEnitity: ThingEntity, soundEntity: SoundEntity) {
    this.thing = { ...thingEnitity };
    this.name = soundEntity.name;
    this.emoji = soundEntity.emoji;
    this.type = soundEntity.type;
    const $files = $(".files");
    for (const fileEntity of soundEntity.files) {
      const file = {
        howl: new Howl({
          src: ["https://media.zottelig.ch/ambiente/audio/" + fileEntity.path],
          preload: false,
          html5: true,
          volume: this._volume * (fileEntity.volume || 1.0),
          stereo:
            typeof fileEntity.pan === "number" ? fileEntity.pan : undefined
        } as any),
        loop: soundEntity.type === "background" && !fileEntity.random,
        ...fileEntity
      };
      file.howl.on("load", () => {
        jsmediatags.read(
          "https://media.zottelig.ch/ambiente/audio/" + fileEntity.path,
          {
            onSuccess: tag => {
              const title = tag.tags.title;
              const artist = tag.tags.artist;
              const source = this.getUserTag(tag, "Source");
              const license = this.getUserTag(tag, "License");
              $(
                `<li>${this.thing.name} - ${this.name}: ${title}${
                  artist ? ` erstellt von ${artist}` : ``
                }${source ? ` kopiert von ${source}` : ``}${
                  license ? ` lizensiert unter ${license}` : ``
                }</li>`
              ).appendTo($files);
            },
            onError: error => {
              console.log(":(", error.type, error.info);
            }
          }
        );
      });
      file.howl.on("end", () => {
        if (soundEntity.type === "background") {
          if (fileEntity.random) {
            setTimeout(() => {
              if (this.state === "stop") return;
              if (fileEntity.pan === "random")
                file.howl.stereo(this.random(-1.0, 1.0));
              file.howl.play();
            }, fileEntity.random * 1000);
          }
        } else if (soundEntity.type === "effect") {
          for (const f of this.files) {
            if (f.howl.playing()) return;
          }
          this._state = "stop";
          this.onStateChange.trigger(this.state);
        }
      });
      this.files.push(file);
    }
  }
  public toggle() {
    if (this.state === "play") {
      this.stop();
    } else {
      this.play();
    }
  }
  private loopFile(
    file: {
      howl: Howl;
      loop: boolean;
    } & FileEntity
  ) {
    file.howl.on("play", () => {
      const duration = (file.howl as any)._sounds[0]._node.duration;
      setTimeout(() => {
        if (this.state === "stop") return;

        file.howl = new Howl({
          src: ["https://media.zottelig.ch/ambiente/audio/" + file.path],
          preload: false,
          html5: true,
          volume: this._volume * (file.volume || 1.0),
          stereo: typeof file.pan === "number" ? file.pan : undefined
        } as any);
        file.howl.play();
        this.loopFile(file);
      }, duration * 1000 - 50);
    });
  }

  public play() {
    this._state = "play";
    this.onStateChange.trigger(this.state);
    for (const file of this.files) {
      if (!file.random) {
        file.howl.play();
        if (file.loop) this.loopFile(file);

        if (this.type === "background")
          file.howl.fade(0.0, this._volume * (file.volume || 1.0), 2000);
      } else {
        setTimeout(() => {
          if (this.state === "stop") return;
          if (file.pan === "random") file.howl.stereo(this.random(-1.0, 1.0));
          file.howl.play();
        }, file.random * 1000);
      }
    }
  }
  public stop() {
    this._state = "stop";
    this.onStateChange.trigger(this.state);
    for (const file of this.files) {
      if (this.type === "background") {
        file.howl.fade(this._volume * (file.volume || 1.0), 0.0, 2000);
        setTimeout(() => {
          if (this.state === "play") return;
          file.howl.stop();
        }, 2000);
      } else file.howl.stop();
    }
  }

  private random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private getUserTag(tag: any, name: string) {
    if (!tag.tags.TXXX) return undefined;

    let userTag: any;
    if (!tag.tags.TXXX.filter) {
      if (
        tag.tags.TXXX.data.user_description.toUpperCase() === name.toUpperCase()
      )
        userTag = tag.tags.TXXX;
      else return undefined;
    } else {
      userTag = tag.tags.TXXX.filter(
        (t: any) => t.data.user_description.toUpperCase() === name.toUpperCase()
      )[0];
    }

    return userTag && userTag.data && userTag.data.data;
  }
}
