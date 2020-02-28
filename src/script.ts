import { categories, BoomboxViewModel } from "./Boombox";

$(document).ready(() => {
  new BoomboxViewModel(".main", categories);
});

$(".info").on("click", () => {
  $(".ui.basic.modal").modal("show");
});
