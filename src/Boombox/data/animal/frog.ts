import { ThingEntity } from "../../Entities";

export const frog: ThingEntity = {
  name: "Frosch",
  emoji: "frog",
  sounds: [
    {
      name: "Quaken",
      emoji: "frog",
      files: [{ path: "frog/croak.mp3" }],
      type: "effect"
    }
  ]
};
