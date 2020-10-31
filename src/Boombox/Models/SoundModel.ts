// Copyright (C) 2020 Markus Peloso
// 
// This file is part of mobile-ambiente.
// 
// mobile-ambiente is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// mobile-ambiente is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with mobile-ambiente.  If not, see <http://www.gnu.org/licenses/>.

import { Howl } from "howler";
import { LiteEvent } from "../../LiteEvent";
import * as jsmediatags from "jsmediatags";
import { FileEntity, ThingEntity, SoundEntity } from "../Entities";
import { ThingModel } from "./ThingModel";

export class SoundModel {
  public readonly thing: ThingModel;
  public readonly name: string;
  public readonly emoji: string;
  public readonly type: string;
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
      if (file.howl) file.howl.volume(this._volume * (file.volume || 1.0));
    }
  }
  private files: ({
    howl: Howl;
  } & FileEntity)[] = [];
  constructor(thingEnitity: ThingEntity, soundEntity: SoundEntity) {
    this.thing = { ...thingEnitity };
    this.name = soundEntity.name;
    this.emoji = soundEntity.emoji;
    this.type = soundEntity.type;

    for (const fileEntity of soundEntity.files) {
      const file = {
        howl: undefined as any,
        ...fileEntity
      };

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
    } & FileEntity
  ) {
    file.howl.on("play", () => {
      const duration = file.howl.duration();
      setTimeout(() => {
        if (this.state === "stop") return;
        if (file.fade)
          file.howl.fade(this._volume * (file.volume || 1.0), 0, file.fade);
        file.howl = this.playHowl(file);
        if (file.fade)
          file.howl.fade(0, this._volume * (file.volume || 1.0), file.fade);
        this.loopFile(file);
      }, duration * 1000 - 50 - (file.fade || 0));
    });
  }

  public play() {
    this._state = "play";
    this.onStateChange.trigger(this.state);

    for (const file of this.files) {
      if (!file.random) {
        file.howl = this.playHowl(file);
        if (this.type === "background" && !file.random) this.loopFile(file);

        if (this.type === "background")
          file.howl.fade(0.0, this._volume * (file.volume || 1.0), 2000);
      } else {
        setTimeout(() => {
          if (this.state === "stop") return;
          file.howl = this.playHowl(file);
        }, file.random * 1000);
      }
    }
  }

  private playHowl(
    file: {
      howl: Howl;
    } & FileEntity
  ) {
    const howl = new Howl({
      src: ["https://media.zottelig.ch/ambiente/audio/" + file.path],
      volume: this._volume * (file.volume || 1.0),
      stereo:
        file.pan === "random"
          ? file.howl.stereo(this.random(-1.0, 1.0))
          : typeof file.pan === "number"
          ? file.pan
          : undefined
    } as any);
    howl.on("load", () => {
      jsmediatags.read(
        "https://media.zottelig.ch/ambiente/audio/" + file.path,
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
            ).appendTo(".files");
          },
          onError: error => {
            console.log(":(", error.type, error.info);
          }
        }
      );
    });
    howl.on("end", () => {
      if (this.type === "background") {
        if (file.random) {
          setTimeout(() => {
            if (this.state === "stop") return;
            if (file.pan === "random") file.howl.stereo(this.random(-1.0, 1.0));
            file.howl.play();
          }, file.random * 1000);
        }
      } else if (this.type === "effect") {
        for (const f of this.files) {
          if (f.howl.playing()) return;
        }
        this._state = "stop";
        this.onStateChange.trigger(this.state);
      }
    });
    howl.play();
    return howl;
  }

  public stop() {
    this._state = "stop";
    this.onStateChange.trigger(this.state);
    for (const file of this.files) {
      const howl = file.howl;
      if (!howl) return;

      if (this.type === "background") {
        howl.fade(this._volume * (file.volume || 1.0), 0.0, 2000);
        setTimeout(() => {
          if (this.state === "play") return;
          howl.stop();
        }, 2000);
      } else howl.stop();
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
