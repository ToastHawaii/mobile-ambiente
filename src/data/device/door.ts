import { ThingEntity } from "../../Boombox";

export const door: ThingEntity = {
  name: "Tür",
  emoji: "door",
  sounds: [
    {
      name: "Klingel",
      emoji: "door",
      files: [{ path: "door/doorbell.mp3" }],
      type: "effect"
    },
    {
      name: "Eingangsglocke",
      emoji: "door",
      files: [{ path: "door/shop-door-bell.mp3" }],
      type: "effect"
    },
    {
      name: "Knarren",
      emoji: "door",
      files: [{ path: "door/old-creaky-door.mp3" }],
      type: "effect"
    }
  ]
};
