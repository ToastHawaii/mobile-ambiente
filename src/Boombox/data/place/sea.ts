import { ThingEntity } from "../../Entities";
import { bird } from "../animal/bird";
import { weather } from "../nature/weather";

export const sea: ThingEntity = {
  name: "Meer",
  emoji: "woman_surfing",
  sounds: [
    {
      name: "Normal",
      emoji: "woman_surfing",
      files: [{ path: "sea/wave.mp3" }],
      type: "background"
    }
  ],
  things: [bird, weather]
};
