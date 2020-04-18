import { ThingEntity } from "../../Entities";

export const hammer: ThingEntity = {
  name: "Hammer",
  emoji: "hammer",
  sounds: [
    {
      name: "Stein",
      emoji: "hammer",
      files: [{ path: "tool/hammer.mp3" }],
      type: "effect"
    },
  ]
};
