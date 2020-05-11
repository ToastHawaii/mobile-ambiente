import { ThingEntity } from "../../Entities";

export const creature: ThingEntity = {
  name: "Kreatur",
  emoji: "ghost",
  sounds: [
    {
      name: "Gebrüll",
      emoji: "lion_face",
      files: [{ path: "creature/roar.mp3" }],
      type: "effect"
    },
    {
      name: "Glucksen",
      emoji: "t_rex",
      files: [{ path: "creature/small-roar.mp3" }],
      type: "effect"
    },
    {
      name: "Heulen",
      emoji: "ghost",
      files: [{ path: "creature/howl.mp3" }],
      type: "effect"
    }
  ]
};
