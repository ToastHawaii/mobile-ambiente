import { ThingEntity } from "../../Entities";

export const monkey: ThingEntity = {
  name: "Affe",
  emoji: "monkey",
  sounds: [
    {
      name: "Schreit",
      emoji: "monkey_face",
      files: [{ path: "monkey/monkey-cry.mp3" }],
      type: "effect"
    }
  ]
};
