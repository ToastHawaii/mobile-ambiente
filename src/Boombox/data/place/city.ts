import { ThingEntity } from "../../Entities";
import { dog } from "../animal/dog";
import { weather } from "../nature/weather";
import { car } from "../vehicle/car";
import { cat } from "../animal/cat";
import { airHammer } from "../tool/airHammer";
import { bell } from "../device/bell";

export const city: ThingEntity = {
  name: "Stadt",
  emoji: "cityscape",
  sounds: [
    {
      name: "Strasse",
      emoji: "cityscape",
      files: [{ path: "city/residential-traffic.mp3" }],
      type: "background"
    },
    {
      name: "Park",
      emoji: "deciduous_tree",
      files: [{ path: "city/park.mp3" }],
      type: "background"
    }
  ],
  things: [car, cat, dog, airHammer, bell, weather]
};
