import { TopicEntity } from "../../Entities";
import { emotion, enjoyableEmotion } from "../shared";

export const body: TopicEntity = {
  name: "Körper",
  emoji: "person_standing",
  tips: ["Körperhaltung", "Körperbau"],
  inspirations: [
    {
      name: "Körperteil",
      emoji: "foot_tone1",
      values: [
        "Achsel",
        "Arm",
        "Auge",
        "Augenlid",
        "Backe/Wange",
        "Bauch",
        "Bein",
        "Brust",
        "Busen",
        "Daumen",
        "Ellbogen/Ellenbogen",
        "Ferse",
        "Finger",
        "Fuss",
        "Gaumen",
        "Gesäss",
        "Hals",
        "Hand",
        "Haupt",
        "Hüfte",
        "Kinn",
        "Knie",
        "Kopf",
        "Leber",
        "Lippe",
        "Luftröhre",
        "Lunge",
        "Mund",
        "Nase",
        "Niere",
        "Oberarm",
        "Oberschenkel",
        "Ohr",
        "Rücken",
        "Schulter",
        "Stirn",
        "Unterarm",
        "Unterschenkel",
        "Wade",
        "Zahn",
        "Zehe",
        "Zunge"
      ]
    },
    emotion,
    enjoyableEmotion
  ]
};
