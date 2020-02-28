import { ThingEntity } from "../../Entities";
import { dog } from "../animal/dog";
import { weather } from "../nature/weather";
import { car } from "../vehicle/car";

export const city: ThingEntity = {
  name: "Stadt",
  emoji: "cityscape",
  sounds: [
    {
      name: "Strasse",
      emoji: "cityscape",
      files: [{ path: "city/residential-traffic.mp3" }],
      type: "background"
    }
  ],
  things: [car, dog, weather]
};
