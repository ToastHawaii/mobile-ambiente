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
