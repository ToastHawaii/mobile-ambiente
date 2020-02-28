import { ThingEntity } from "../../Entities";
import { weather } from "../nature/weather";
import { bird } from "../animal/bird";
import { dog } from "../animal/dog";

export const stream: ThingEntity = {
  name: "Fluss",
  emoji: "park",
  sounds: [
    {
      name: "Normal",
      emoji: "park",
      files: [{ path: "stream/cave-waterfall.mp3" }],
      type: "background"
    }
  ],
  things: [bird, dog, weather]
};
