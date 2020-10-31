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

import { TopicViewModel } from "./TopicViewModel";
import { TopicModel } from "../Models/TopicModel";
import { CategorieEntity, TopicEntity } from "../Entities";

export class InspirationViewModel {
  constructor(selector: string, categories: CategorieEntity[]) {
    const $main = $(selector);
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
    things: TopicEntity[]
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

      for (const s of t.inspirations) {
        const topicModel = new TopicModel(s);
        new TopicViewModel($thingsContent, topicModel);
      }

      const $tips = $(`<p>Tipps:</p>`).appendTo($thingsContent);

      const $list = $(`<ul></ul>`).appendTo($tips);
      for (const tip of t.tips) {
        $(`<li>${tip}</li>`).appendTo($list);
      }
    }
  }
}
