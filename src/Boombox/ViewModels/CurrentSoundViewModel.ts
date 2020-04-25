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
