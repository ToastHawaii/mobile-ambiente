import { Howl } from "howler";
import { place } from "./data/place";
import { animal } from "./data/animal";

class LiteEvent<T> {
  private handlers: { (data: T): void }[] = [];

  public on(handler: { (data: T): void }): void {
    this.handlers.push(handler);
  }

  public off(handler: { (data: T): void }): void {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  public trigger(data: T) {
    this.handlers.slice(0).forEach(h => h(data));
  }

  public expose(): LiteEvent<T> {
    return this;
  }
}

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
  things: ThingModel[];
}

export interface ThingModel {
  name: string;
  emoji: string;
}

export interface Sound {
  thing: ThingModel;
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
  emoji: string;
  files: FileEntity[];
  type: "background" | "effect";
}

export interface CategorieEntity {
  name: string;
  things: ThingEntity[];
}

export const categories: CategorieEntity[] = [place, animal];

export function init(selector: string, categories: CategorieEntity[]) {
  const $main = $(selector);
  const $menu = $(
    `<div class="ui pointing secondary large menu"></div>`
  ).appendTo($main);

  const backgroundViewModel = new CurrentSoundViewModel(`.background`);
  const effectViewModel = new CurrentSoundViewModel(`.effect`);
  const soundModels: SoundModel[] = [];
  const soundViewModels: SoundViewModel[] = [];

  for (const c of categories) {
    $(`<a class="item" data-tab="${c.name}">${c.name}</a>`).appendTo($menu);
    const $content = $(
      `<div class="ui tab" data-tab="${c.name}"></div>`
    ).insertAfter($menu);

    const $thingsMenu = $(
      `<div class="ui pointing labeled icon large menu"></div>`
    ).appendTo($content);

    for (const t of c.things) {
      $(`
        <a class="item" data-tab="${c.name}-${t.name}">
          <em data-emoji=":${t.emoji}:"></em>
          ${t.name}
        </a>
        `).appendTo($thingsMenu);
      const $thingsContent = $(
        `<div class="ui tab" data-tab="${c.name}-${t.name}"></div>`
      ).appendTo($content);

      for (const s of t.sounds) {
        const soundModel = new SoundModel(t, s);
        soundModels.push(soundModel);

        const soundViewModel = new SoundViewModel($thingsContent, soundModel);
        soundViewModels.push(soundViewModel);

        soundModel.OnStateChange.on(state => {
          if (state === "play") {
            for (const m of soundModels.filter(
              m => soundModel !== m && m.type === soundModel.type
            ))
              m.stop();

            for (const vm of soundViewModels.filter(
              vm => soundModel !== vm.model && vm.model.type === soundModel.type
            ))
              vm.selected = false;
          }
        });

        if (soundModel.type === "background")
          soundModel.OnStateChange.on(state => {
            if (state === "play") {
              backgroundViewModel.changeModel(soundModel);
              soundViewModel.selected = true;
            }
          });

        if (soundModel.type === "effect")
          soundModel.OnStateChange.on(state => {
            if (state === "play") {
              effectViewModel.changeModel(soundModel);
              soundViewModel.selected = true;
            }
          });
      }
    }
  }

  $(".menu .item").tab();
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

class CurrentSoundViewModel {
  private $stop: JQuery<HTMLElement>;
  private $play: JQuery<HTMLElement>;
  private $sound: JQuery<HTMLElement>;
  private model: SoundModel;

  public changeModel(value: SoundModel) {
    if (this.model) this.model.OnStateChange.off(this.modelStateChangeHandler);
    this.model = value;
    this.model.OnStateChange.on(this.modelStateChangeHandler);
    this.updateState();

    this.$sound.html("");
    $(`
    <span>
      <em data-emoji=":${this.model.emoji}:" class="medium"></em><br>
      ${this.model.thing.name}: ${this.model.name} 
    </span>`).appendTo(this.$sound);
  }

  private modelStateChangeHandler = () => {
    this.updateState();
  };

  private updateState() {
    switch (this.model.state) {
      case "play":
        this.$play.removeClass("hidden");
        this.$stop.addClass("hidden");
        break;
      case "stop":
        this.$play.addClass("hidden");
        this.$stop.removeClass("hidden");
        break;
    }
  }

  constructor(selector: string) {
    const $element = $(selector);
    this.$sound = $(`
    <span></span>
  `).appendTo($element);

    this.$stop = $(`<i class="hidden play icon"></i>`).appendTo($element);
    this.$play = $(`<i class="hidden stop icon"></i>`).appendTo($element);

    $element.on("click", () => {
      this.model.toggle();
      this.updateState();
    });
  }
}

class SoundViewModel {
  private $stop: JQuery<HTMLElement>;
  private $play: JQuery<HTMLElement>;
  private _selected: boolean;
  public get selected(): boolean {
    return this._selected;
  }
  public set selected(value: boolean) {
    this._selected = value;
    if (!this._selected) {
      this.$play.addClass("hidden");
      this.$stop.addClass("hidden");
    }
  }

  constructor($parent: JQuery<HTMLElement>, public readonly model: SoundModel) {
    const $sound = $(`
    <div class="ui basic button">
      <em data-emoji=":${model.emoji}:" class="medium"></em><br />
      ${model.name}
      ${
        model.type === "background"
          ? `
      <span class="ui right corner label">
          <i class="sync icon"></i>
      </span>`
          : ``
      }
    </div>
  `).appendTo($parent);

    this.$stop = $(`
<span class="hidden bottom floating ui red label">
  <i class="stop icon"></i>
</span>
`).appendTo($sound);

    this.$play = $(`
<span class="hidden bottom floating ui teal label">
  <i class="play icon"></i>
</span>
`).appendTo($sound);

    $sound.on("click", () => {
      model.toggle();
    });

    model.OnStateChange.on(state => {
      this.updateState(state);
    });
  }
  private updateState(state: "play" | "stop") {
    switch (state) {
      case "play":
        this.$play.removeClass("hidden");
        this.$stop.addClass("hidden");
        break;
      case "stop":
        this.$play.addClass("hidden");
        this.$stop.removeClass("hidden");
        break;
    }
  }
}

class SoundModel {
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
  private files: ({ howl: Howl } & FileEntity)[] = [];

  constructor(thingEnitity: ThingEntity, soundEntity: SoundEntity) {
    this.thing = { ...thingEnitity };
    this.name = soundEntity.name;
    this.emoji = soundEntity.emoji;
    this.type = soundEntity.type;
    for (const fileEntity of soundEntity.files) {
      const file = {
        howl: new Howl({
          src: ["https://media.zottelig.ch/clown/audio/" + fileEntity.path],
          preload: false,
          html5: true,
          volume: fileEntity.volume,
          loop: soundEntity.type === "background" && !fileEntity.random,
          stereo:
            typeof fileEntity.pan === "number" ? fileEntity.pan : undefined
        } as any),
        ...fileEntity
      };

      file.howl.on("end", () => {
        if (soundEntity.type === "background") {
          if (fileEntity.random) {
            setTimeout(() => {
              if (this.state === "stop") return;

              if (fileEntity.pan === "random") file.howl.stereo(random(-1, 1));

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

  public play() {
    this._state = "play";
    this.onStateChange.trigger(this.state);
    for (const file of this.files) {
      if (!file.random) {
        file.howl.play();
        if (this.type === "background")
          file.howl.fade(0, file.volume || 1, 2000);
      } else {
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
    this.onStateChange.trigger(this.state);
    for (const file of this.files) {
      if (this.type === "background") {
        file.howl.fade(file.volume || 1, 0, 2000);
        setTimeout(() => {
          if (this.state === "play") return;
          file.howl.stop();
        }, 2000);
      } else file.howl.stop();
    }
  }
}
