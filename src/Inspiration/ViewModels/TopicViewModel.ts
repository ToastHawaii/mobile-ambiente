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

import { TopicModel } from "../Models/TopicModel";

export class TopicViewModel {
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
  constructor($parent: JQuery<HTMLElement>, public readonly model: TopicModel) {
    const $inspiration = $(`
    <div class="ui basic button">
      <em data-emoji=":${model.emoji}:" class="medium"></em><br />
      ${model.name}
    </div>
  `).appendTo($parent);
    this.$stop = $(`
<span class="hidden bottom floating ui red label">
  <i class="stop icon"></i>
</span>
`).appendTo($inspiration);
    this.$play = $(`
<span class="hidden bottom floating ui teal label">
  <i class="play icon"></i>
</span>
`).appendTo($inspiration);
    $inspiration.on("click", () => {
      $inspiration[0].setAttribute("data-tooltip", model.next());
    });
  }
}
