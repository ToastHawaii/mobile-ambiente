import { ThingEntity } from "../../Entities";

export const phone: ThingEntity = {
  name: "Telefon",
  emoji: "telephone_receiver",
  sounds: [
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
