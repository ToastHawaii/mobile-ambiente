import { init, categories } from "./Boombox";

$(document).ready(() => {
  init(".main", categories);
});

const jsmediatags = require("jsmediatags");

jsmediatags.read("https://media.zottelig.ch/ambiente/audio/car/car-horn.mp3", {
  onSuccess: function(tag: any) {
    console.log(tag);
  },
  onError: function(error: any) {
    console.log(":(", error.type, error.info);
  }
});
