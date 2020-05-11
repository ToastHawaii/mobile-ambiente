import { ThingEntity } from "../../Entities";

export const phone: ThingEntity = {
  name: "Telefon",
  emoji: "telephone_receiver",
  sounds: [
    {
      name: "Klingeln (Vibration)",
      emoji: "iphone",
      files: [{ path: "phone/cell-phone-vibrating.mp3" }],
      type: "background"
    },
    {
      name: "Klingeln",
      emoji: "telephone_receiver",
      files: [{ path: "phone/telephone-sounds.mp3" }],
      type: "background"
    },
    {
      name: "Aufgelegt",
      emoji: "telephone_receiver",
      files: [{ path: "phone/phone-beeping.mp3" }],
      type: "background"
    }
  ]
};
