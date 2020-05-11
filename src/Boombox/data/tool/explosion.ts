import { ThingEntity } from "../../Entities";

export const explosion: ThingEntity = {
  name: "Explosion",
  emoji: "boom",
  sounds: [
    {
      name: "Explosion",
      emoji: "boom",
      files: [{ path: "tool/explosion.mp3" }],
      type: "effect"
    }
  ]
};
