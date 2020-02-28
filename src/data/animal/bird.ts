import { ThingEntity } from "../../Entities";

export const bird: ThingEntity = {
  name: "Vogel",
  emoji: "bird",
  sounds: [
    {
      name: "Ente",
      emoji: "duck",
      files: [{ path: "bird/20130403-duck-04.mp3" }],
      type: "effect"
    },
    {
      name: "Krähe",
      emoji: "bird",
      files: [{ path: "bird/crow.mp3" }],
      type: "effect"
    },
    {
      name: "Eule",
      emoji: "owl",
      files: [{ path: "bird/owl.mp3" }],
      type: "effect"
    }
  ]
};
