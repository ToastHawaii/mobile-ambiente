import { ThingEntity } from "../../Entities";

export const rubberDuck: ThingEntity = {
  name: "Quietscheente",
  emoji: "duck",
  sounds: [
    {
      name: "Quietschen",
      emoji: "duck",
      files: [{ path: "rubber-duck/rubber-duck.mp3" }],
      type: "effect"
    }
  ]
};
