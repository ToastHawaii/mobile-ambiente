import {  BoomboxViewModel } from "./ViewModels/BoomboxViewModel";
import { categories } from "./data/categories";

$(document).ready(() => {
  new BoomboxViewModel(".main", categories);
});

$(".info").on("click", () => {
  $(".ui.basic.modal").modal("show");
});
