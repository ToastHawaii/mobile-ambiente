import { ThingEntity } from "../../Entities";
import { bird } from "../animal/bird";
import { weather } from "../nature/weather";
import { dog } from "../animal/dog";

export const forest: ThingEntity = {
  name: "Wald",
  emoji: "deciduous_tree",
  sounds: [
    {
      name: "Normal",
      emoji: "deciduous_tree",
      files: [{ path: "forest/bird-chorus.mp3" }],
      type: "background"
    }
  ],
  things: [bird, dog, weather]
};
