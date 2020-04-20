import { ThingEntity } from "../../Entities";

export const fire: ThingEntity = {
  name: "Feuer",
  emoji: "fire",
  sounds: [
    {
      name: "Feuer",
      emoji: "fire",
      files: [{ path: "fire/chimney-fire.mp3" }],
      type: "background"
    }
  ]
};
