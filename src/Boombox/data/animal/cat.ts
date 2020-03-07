import { ThingEntity } from "../../Entities";

export const cat: ThingEntity = {
  name: "Katze",
  emoji: "cat2",
  sounds: [
    {
      name: "Miauen",
      emoji: "cat",
      files: [{ path: "cat/cat-meowing.mp3" }],
      type: "effect"
    },
    {
      name: "Fauchen",
      emoji: "cat",
      files: [{ path: "cat/cat-screaming.mp3" }],
      type: "effect"
    }
  ]
};
