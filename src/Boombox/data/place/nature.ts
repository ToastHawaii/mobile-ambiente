import { ThingEntity } from "../../Entities";
import { bird } from "../animal/bird";
import { weather } from "../nature/weather";
import { dog } from "../animal/dog";
import { insect } from "../animal/insect";

export const nature: ThingEntity = {
  name: "Nature",
  emoji: "park",
  sounds: [
    {
      name: "Wald",
      emoji: "deciduous_tree",
      files: [{ path: "forest/bird-chorus.mp3", fade: 2000 }],
      type: "background"
    },
    {
      name: "Teich",
      emoji: "woman_rowing_boat_tone5",
      files: [
        { path: "pond/lake-waves.mp3" },
        { path: "pond/small-waves-hitting-boat.mp3" }
      ],
      type: "background"
    },
    {
      name: "Fluss",
      emoji: "park",
      files: [{ path: "stream/cave-waterfall.mp3" }],
      type: "background"
    }
  ],
  things: [bird, dog, insect, weather]
};
