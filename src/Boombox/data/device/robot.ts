import { ThingEntity } from "../../Entities";

export const robot: ThingEntity = {
  name: "Roboter",
  emoji: "robot",
  sounds: [
    {
      name: "Piepen",
      emoji: "o",
      files: [{ path: "robot/beep.mp3" }],
      type: "effect"
    },
    {
      name: "Elektrische Entladung",
      emoji: "sparkler",
      files: [{ path: "robot/electric-discharge.mp3" }],
      type: "effect"
    }
  ]
};
