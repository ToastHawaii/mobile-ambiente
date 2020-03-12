import { TopicEntity } from "../../Entities";
import { thing, animal } from "../shared";

export const model: TopicEntity = {
  name: "Vorbild",
  emoji: "cat2",
  tips: ["Körperhaltung", "Bewegung", "Verhalten", "Eigenschaften"],
  inspirations: [
    animal,
    {
      name: "Fabelwesen",
      emoji: "dragon",
      values: [
        "Bigfoot",
        "Dämon",
        "Drache",
        "Eierlegende Wollmilchsau",
        "Einhorn",
        "Elfe",
        "Fee",
        "Flaschengeist",
        "Gespenst",
        "Gnom",
        "Godzilla",
        "Heinzelmännchen",
        "Hexe",
        "Kobold",
        "Meerjungfrau",
        "Mumie",
        "Ork",
        "Osterhase",
        "Pegasus",
        "Phönix",
        "Poltergeist",
        "Riese",
        "Sandmann",
        "Schlumpf",
        "Sphinx",
        "Sirene",
        "Titan",
        "Troll",
        "Vampir",
        "Weihnachtsmann",
        "Werwolf",
        "Yeti",
        "Zahnfee",
        "Zauberer",
        "Zombie",
        "Zwerg"
      ]
    },
    thing
  ]
};
