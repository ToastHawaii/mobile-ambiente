import { init, categories } from "./Boombox";

$(document).ready(() => {
  init(".main", categories);
});

$(".info").on("click", () => {
  $(".ui.basic.modal").modal("show");
});
