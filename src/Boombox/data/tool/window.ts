import { ThingEntity } from "../../Entities";

export const window: ThingEntity = {
  name: "Fenster",
  emoji: "park",
  sounds: [
    {
      name: "Zersplittert",
      emoji: "boom",
      files: [{ path: "tool/glass-zerbricht.mp3" }],
      type: "effect"
    }
  ]
};
