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
  files: File;
  selected: true;
  state: "play" | "stop";
}

export interface BackgroundSound extends Sound {
  type: "background";
}

export interface EffectSound extends Sound {
  type: "effect";
}

export interface File {
  path: string;
  volume?: number;
  pan?: "random" | number;
  random?: number;
}

export interface ThingSource {
  name: string;
  emoji: string;
  sounds: SoundSource[];
}

export interface SoundSource {
  name: string;
  files: File[];
  type: "background" | "effect";
}

export interface CategorieSource {
  name: string;
  things: ThingSource[];
}

export const forest: ThingSource = {
  name: "Wald",
  emoji: "deciduous_tree",
  sounds: [
    {
      name: "Normal",
      files: [{ path: "forest/distant-forest-ambience.mp3" }],
      type: "background"
    }
  ]
};
export const categories: CategorieSource[] = [
  { name: "Ort", things: [forest] },
  { name: "Tier", things: [] }
];

export function init(selector: string, categories: CategorieSource[]) {
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
        $(`
        <div class="ui basic button">
            <em data-emoji=":${t.emoji}:" class="medium"></em><br />
            ${s.name}
            ${
              s.type === "background"
                ? `
            <a class="ui right corner label">
                <i class="sync icon"></i>
            </a>`
                : ``
            }
            <a class="hidden bottom floating ui red label">
              <i class="stop icon"></i>
            </a>
            <a class="hidden bottom floating ui teal label">
              <i class="play icon"></i>
            </a>
          </div>
        `).appendTo($thingsContent);
      }
    }
  }

  $(".menu .item").tab();
}
