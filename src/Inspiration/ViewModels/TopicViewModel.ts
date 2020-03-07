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
