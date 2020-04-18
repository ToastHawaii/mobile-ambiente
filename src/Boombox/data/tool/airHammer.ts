import { ThingEntity } from "../../Entities";

export const airHammer: ThingEntity = {
  name: "Presslufthammer",
  emoji: "construction_worker",
  sounds: [
    {
      name: "Presslufthammer",
      emoji: "construction_worker",
      files: [{ path: "tool/air-hammer.mp3" }],
      type: "effect"
    }
  ]
};
