import { forest } from "./data/place/forest";
import { Howl } from "howler";

export interface Boombox {
  background: BackgroundSound;
  effect: EffectSource;
  sources: Categorie[];
}

export interface Source {
  state: "play" | "stop";
  volume: number;
}

export interface EffectSource {
  source: EffectSound;
}

export interface BackgroundSource {
  source: BackgroundSound;
}

export interface Categorie {
  name: string;
  things: Thing[];
}

export interface Thing {
  name: string;
  emoji: string;
  sounds: BackgroundSound | EffectSound;
}

export interface Sound {
  thing: Thing;
  name: string;
  selected: true;
  state: "play" | "stop";
}

export interface BackgroundSound extends Sound {
  type: "background";
}

export interface EffectSound extends Sound {
  type: "effect";
}

export interface FileEntity {
  path: string;
  volume?: number;
  pan?: "random" | number;
  random?: number;
}

export interface ThingEntity {
  name: string;
  emoji: string;
  sounds: SoundEntity[];
}

export interface SoundEntity {
  name: string;
  files: FileEntity[];
  type: "background" | "effect";
}

export interface CategorieEntity {
  name: string;
  things: ThingEntity[];
}

export const categories: CategorieEntity[] = [
  { name: "Ort", things: [forest] },
  { name: "Tier", things: [] }
];

export function init(selector: string, categories: CategorieEntity[]) {
  const $main = $(selector);
  const $menu = $(`<div class="ui pointing secondary menu"></div>`).appendTo(
    $main
  );
  for (const c of categories) {
    $(`<a class="item" data-tab="${c.name}">${c.name}</a>`).appendTo($menu);
    const $content = $(
      `<div class="ui tab" data-tab="${c.name}"></div>`
    ).insertAfter($menu);

    const $thingsMenu = $(
      `<div class="ui pointing labeled icon menu"></div>`
    ).appendTo($content);

    for (const t of c.things) {
      $(`
        <a class="item" data-tab="${c.name}-${t.name}">
          <em data-emoji=":${t.emoji}:"></em>
          ${t.name}
        </a>
        `).appendTo($thingsMenu);
      const $thingsContent = $(`
        <div class="ui tab" data-tab="${c.name}-${t.name}"></div>
        `).appendTo($content);

      for (const s of t.sounds) {
        const soundModel = new SoundModel(s);

        new SoundViewModel($thingsContent, t.emoji, soundModel);
      }
    }
  }

  $(".menu .item").tab();
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

class SoundViewModel {
  constructor($parent: JQuery<HTMLElement>, emoji: string, model: SoundModel) {
    const $sound = $(`
    <div class="ui basic button">
      <em data-emoji=":${emoji}:" class="medium"></em><br />
      ${model.name}
      ${
        model.type === "background"
          ? `
      <a class="ui right corner label">
          <i class="sync icon"></i>
      </a>`
          : ``
      }
    </div>
  `).appendTo($parent);

    const $stop = $(`
<a class="hidden bottom floating ui red label">
  <i class="stop icon"></i>
</a>
`).appendTo($sound);

    const $play = $(`
<a class="hidden bottom floating ui teal label">
  <i class="play icon"></i>
</a>
`).appendTo($sound);

    $sound.on("click", () => {
      model.toggle();
      switch (model.state) {
        case "play":
          $play.removeClass("hidden");
          $stop.addClass("hidden");
          break;
        case "stop":
          $play.addClass("hidden");
          $stop.removeClass("hidden");
          break;
      }
    });
  }
}

class SoundModel {
  public thing: Thing;
  public name: string;
  public type: string;

  private _state: "play" | "stop";
  public get state(): "play" | "stop" {
    return this._state;
  }
  private files: ({ howl: Howl } & FileEntity)[] = [];

  constructor(soundEntity: SoundEntity) {
    this.name = soundEntity.name;
    this.type = soundEntity.type;
    for (const fileEntity of soundEntity.files) {
      const file = {
        howl: new Howl({
          src: ["https://media.zottelig.ch/clown/audio/" + fileEntity.path],
          preload: false,
          html5: true,
          volume: fileEntity.volume,
          loop: !fileEntity.random,
          stereo:
            typeof fileEntity.pan === "number" ? fileEntity.pan : undefined
        } as any),
        ...fileEntity
      };

      file.howl.on("end", () => {
        if (fileEntity.random) {
          setTimeout(() => {
            if (this.state === "stop") return;

            if (fileEntity.pan === "random") file.howl.stereo(random(-1, 1));
            file.howl.play();
          }, fileEntity.random * 1000);
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

  public play() {
    this._state = "play";
    for (const file of this.files) {
      if (!file.random) file.howl.play();
      else {
        setTimeout(() => {
          if (this.state === "stop") return;

          if (file.pan === "random") file.howl.stereo(random(-1, 1));
          file.howl.play();
        }, file.random * 1000);
      }
    }
  }

  public stop() {
    this._state = "stop";
    for (const file of this.files) {
      file.howl.stop();
    }
  }
}
