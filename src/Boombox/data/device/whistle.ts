import { ThingEntity } from "../../Entities";

export const whistle: ThingEntity = {
  name: "Trillerpfeife",
  emoji: "woman_police_officer_tone5",
  sounds: [
    {
      name: "Pfiff",
      emoji: "police_officer_tone4",
      files: [{ path: "whistle/whistle.mp3" }],
      type: "effect"
    }
  ]
};
