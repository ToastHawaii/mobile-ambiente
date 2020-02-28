import { ThingEntity } from "../../Boombox";

export const dog: ThingEntity = {
  name: "Hund",
  emoji: "dog2",
  sounds: [
    {
      name: "Hecheln",
      emoji: "dog",
      files: [{ path: "dog/large-dog-panting-slowly.mp3" }],
      type: "background"
    },
    {
      name: "Bellen",
      emoji: "dog",
      files: [{ path: "dog/dog-bark.mp3" }],
      type: "effect"
    },
    {
      name: "Knurren",
      emoji: "dog",
      files: [{ path: "dog/dog-growls.mp3" }],
      type: "effect"
    }
  ]
};
