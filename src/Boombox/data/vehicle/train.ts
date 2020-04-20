import { ThingEntity } from "../../Entities";

export const train: ThingEntity = {
  name: "Zug",
  emoji: "steam_locomotive",
  sounds: [
    {
      name: "Fahrt",
      emoji: "steam_locomotive",
      files: [{ path: "train/steam-train.mp3" }],
      type: "background"
    },
    {
      name: "Pfeife",
      emoji: "loud_sound",
      files: [{ path: "train/steam-train-whistle-single.mp3" }],
      type: "effect"
    }
  ]
};
