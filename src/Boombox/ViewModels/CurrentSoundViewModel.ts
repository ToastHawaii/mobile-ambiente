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

import { SoundModel } from "../Models/SoundModel";
export class CurrentSoundViewModel {
  private $stop: JQuery<HTMLElement>;
  private $play: JQuery<HTMLElement>;
  private $sound: JQuery<HTMLElement>;
  private model: SoundModel;
  private volume: number = 0.5;
  public changeModel(value: SoundModel) {
    if (this.model) this.model.OnStateChange.off(this.modelStateChangeHandler);
    this.model = value;
    this.model.volume = this.volume;
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
    const popupTarget = $(selector + ".audio.item");
    const popup = $(selector + ".audio.popup");

    popupTarget
      .popup({
        popup: popup,
        position: "top center",
        on: "manual",
        lastResort: "top center"
      })
      .on("click", () => {
        if (popup.hasClass("hidden")) {
          popupTarget.popup("show");
          (popup.children(".ui.slider") as any).slider({
            min: 0,
            max: 100,
            step: 5,
            start: this.volume * 100,
            onMove: () => {
              this.volume =
                (popup.children(".ui.slider") as any).slider("get value") / 100;
              this.model.volume = this.volume;
            }
          });
          popupTarget.popup("show");
        } else {
          popupTarget.popup("hide");
        }
      });

    const $element = $(selector + ".control");
    this.$sound = $(`<span></span>`).appendTo($element);
    this.$stop = $(`<i class="hidden play icon"></i>`).appendTo($element);
    this.$play = $(`<i class="hidden stop icon"></i>`).appendTo($element);
    $element.on("click", () => {
      this.model.toggle();
      this.updateState();
    });
  }
}
