import { ThingEntity } from "../../Entities";
import { door } from "../device/door";
import { phone } from "../device/phone";
import { bell } from "../device/bell";

export const forest: ThingEntity = {
  name: "Küche",
  emoji: "man_cook_tone3",
  sounds: [
    {
      name: "Normal",
      emoji: "cooking",
      files: [{ path: "kitchen/boiling-and-burning.mp3" }],
      type: "background"
    }
  ],
  things: [door, phone, bell]
};
