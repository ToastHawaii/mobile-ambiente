import { BoomboxViewModel } from "./Boombox/ViewModels/BoomboxViewModel";
import { categories as boomboxCategories } from "./Boombox/data/categories";
import { categories as inspirationCategories } from "./Inspiration/data/categories";
import { InspirationViewModel } from "./Inspiration/ViewModels/InspirationViewModel";

$(document).ready(() => {
  new BoomboxViewModel(".boombox", boomboxCategories);
  new InspirationViewModel(".inspiration", inspirationCategories);
});

$(".info").on("click", () => {
  $(".ui.basic.modal").modal("show");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
