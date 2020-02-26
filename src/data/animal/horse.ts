import { ThingEntity } from "../../Boombox";

export const horse: ThingEntity = {
  name: "Pferd",
  emoji: "horse",
  sounds: [
    {
      name: "Galoppiern",
      emoji: "racehorse",
      files: [{ path: "horse/horse-running.mp3" }],
      type: "background"
    },
    {
      name: "Schnauben",
      emoji: "horse",
      files: [{ path: "horse/horse-snort.mp3" }],
      type: "effect"
    },
    {
      name: "Wiehern",
      emoji: "horse",
      files: [{ path: "horse/horse-whinny.mp3" }],
      type: "effect"
    }
  ]
};
