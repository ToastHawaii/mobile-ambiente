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

import { CurrentSoundViewModel } from "./CurrentSoundViewModel";
import { SoundViewModel } from "./SoundViewModel";
import { SoundModel } from "../Models/SoundModel";
import { CategorieEntity, ThingEntity } from "../Entities";

export class BoomboxViewModel {
  private backgroundViewModel = new CurrentSoundViewModel(`.background`);
  private effectViewModel = new CurrentSoundViewModel(`.effect`);
  private soundModels: SoundModel[] = [];
  private soundViewModels: SoundViewModel[] = [];

  constructor(selector: string, categories: CategorieEntity[]) {
    const $main = $(selector);
    if ($main.length === 0) return;

    const $menu = $(
      `<div class="ui pointing secondary stacked-when-needed large menu"></div>`
    ).appendTo($main);

    for (const c of categories) {
      $(`<a class="item" data-tab="${c.name}">${c.name}</a>`).appendTo($menu);
      const $content = $(
        `<div class="ui tab" data-tab="${c.name}"></div>`
      ).insertAfter($menu);

      this.addThings($content, c.name, c.things);
    }

    $(".menu .item").tab();
  }

  private addThings(
    $content: JQuery<HTMLElement>,
    categorieName: string,
    things: ThingEntity[]
  ) {
    const $thingsMenu = $(
      `<div class="ui labeled icon stacked-when-needed large menu"></div>`
    ).appendTo($content);

    for (const t of things) {
      $(`
  <a class="item" data-tab="${categorieName}-${t.name}">
    <em data-emoji=":${t.emoji}:"></em>
    ${t.name}
  </a>
  `).appendTo($thingsMenu);
      const $thingsContent = $(
        `<div class="ui tab" data-tab="${categorieName}-${t.name}"></div>`
      ).appendTo($content);

      for (const s of t.sounds) {
        const soundModel = new SoundModel(t, s);
        this.soundModels.push(soundModel);

        const soundViewModel = new SoundViewModel($thingsContent, soundModel);
        this.soundViewModels.push(soundViewModel);

        soundModel.OnStateChange.on(state => {
          if (state === "play") {
            for (const m of this.soundModels.filter(
              m => soundModel !== m && m.type === soundModel.type
            ))
              m.stop();

            for (const vm of this.soundViewModels.filter(
              vm => soundModel !== vm.model && vm.model.type === soundModel.type
            ))
              vm.selected = false;
          }
        });

        if (soundModel.type === "background")
          soundModel.OnStateChange.on(state => {
            if (state === "play") {
              this.backgroundViewModel.changeModel(soundModel);
              soundViewModel.selected = true;
            }
          });

        if (soundModel.type === "effect")
          soundModel.OnStateChange.on(state => {
            if (state === "play") {
              this.effectViewModel.changeModel(soundModel);
              soundViewModel.selected = true;
            }
          });
      }
      if (t.things && t.things.length > 0)
        this.addThings($thingsContent, `${categorieName}-${t.name}`, t.things);
    }
  }
}
