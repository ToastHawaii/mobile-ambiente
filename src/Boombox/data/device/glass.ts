import { ThingEntity } from "../../Entities";

export const glass: ThingEntity = {
  name: "Glass",
  emoji: "cocktail",
  sounds: [
    {
      name: "Klimpern",
      emoji: "champagne_glass",
      files: [{ path: "glass/collecting-glassess.mp3" }],
      type: "effect"
    },
    {
      name: "Zerbrechen",
      emoji: "boom",
      files: [{ path: "glass/glass-breaking.mp3" }],
      type: "effect"
    }
  ]
};
