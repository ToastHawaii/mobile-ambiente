import { ThingEntity } from "../../Entities";

export const baby: ThingEntity = {
  name: "Baby",
  emoji: "baby_tone4",
  sounds: [
    {
      name: "Lachen",
      emoji: "smiley",
      files: [{ path: "baby/laughs.mp3" }],
      type: "effect"
    },
    {
      name: "Schreien",
      emoji: "tired_face",
      files: [{ path: "baby/cooing.mp3" }],
      type: "effect"
    }
  ]
};
