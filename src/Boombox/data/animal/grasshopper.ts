import { ThingEntity } from "../../Entities";

export const grasshopper: ThingEntity = {
  name: "Grasshüpfer",
  emoji: "cricket",
  sounds: [
    {
      name: "Zirpen",
      emoji: "cricket",
      files: [{ path: "grasshopper/grasshopper.mp3" }],
      type: "background"
    }
  ]
};
