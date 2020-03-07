import { ThingEntity } from "../../Entities";

export const cow: ThingEntity = {
  name: "Kuh",
  emoji: "cow2",
  sounds: [
    {
      name: "Glocken",
      emoji: "cow2",
      files: [{ path: "cow/cow-bells.mp3" }],
      type: "background"
    },
    {
      name: "Muht",
      emoji: "cow",
      files: [{ path: "cow/cow-mooing.mp3" }],
      type: "effect"
    }
  ]
};
