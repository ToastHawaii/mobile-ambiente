import { ThingEntity } from "../../Entities";
import { door } from "../device/door";
import { phone } from "../device/phone";
import { bell } from "../device/bell";
import { cat } from "../animal/cat";
import { dog } from "../animal/dog";
import { insect } from "../animal/insect";

export const kitchen: ThingEntity = {
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
  things: [door, phone, bell, cat, dog, insect]
};
