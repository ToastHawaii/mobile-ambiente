import { ThingEntity } from "../../Entities";

export const bee: ThingEntity = {
  name: "Biene",
  emoji: "bee",
  sounds: [
    {
      name: "Summen",
      emoji: "bee",
      files: [{ path: "bee/beehive.mp3", fade: 1000 }],
      type: "background"
    }
  ]
};
