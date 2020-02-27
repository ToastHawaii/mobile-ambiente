import { init, categories } from "./Boombox";

$(document).ready(() => {
  init(".main", categories);
});

import * as jsmediatags from "jsmediatags";

jsmediatags.read("https://media.zottelig.ch/ambiente/audio/car/car-horn.mp3", {
  onSuccess: function(tag: any) {
    console.log(tag);
  },
  onError: function(error: any) {
    console.log(":(", error.type, error.info);
  }
});
