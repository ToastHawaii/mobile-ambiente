import { ThingEntity } from "../../Entities";
import { bird } from "../animal/bird";
import { weather } from "../nature/weather";
import { frog } from "../animal/frog";

export const pond: ThingEntity = {
  name: "Teich",
  emoji: "woman_rowing_boat_tone5",
  sounds: [
    {
      name: "Normal",
      emoji: "woman_rowing_boat_tone5",
      files: [
        { path: "pond/lake-waves.mp3" },
        { path: "pond/small-waves-hitting-boat.mp3" }
      ],
      type: "background"
    }
  ],
  things: [bird, frog, weather]
};
