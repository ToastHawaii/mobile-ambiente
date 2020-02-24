import { init, categories } from "./Boombox";

function documentReady(fn: () => void) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

documentReady(function() {
  init(".main", categories);
});
