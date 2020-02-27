import { ThingEntity } from "../../Boombox";

export const car: ThingEntity = {
  name: "Auto",
  emoji: "red_car",
  sounds: [
    {
      name: "Motor",
      emoji: "red_car",
      files: [{ path: "car/engine.mp3" }],
      type: "background"
    },
    {
      name: "Hupe",
      emoji: "red_car",
      files: [{ path: "car/car-horn.mp3" }],
      type: "effect"
    },
    {
      name: "Motor start",
      emoji: "red_car",
      files: [{ path: "car/engine-on-off-1.mp3" }],
      type: "effect"
    },
    {
      name: "Bremsen",
      emoji: "red_car",
      files: [{ path: "car/car-breaks.mp3" }],
      type: "effect"
    },
    {
      name: "Unfall",
      emoji: "fireworks",
      files: [{ path: "car/car-crash.mp3" }],
      type: "effect"
    }
  ]
};
