import { TopicEntity } from "../../Entities";
import { accessoireValues } from "../shared";

export const accessoire: TopicEntity = {
  name: "Accessoire",
  emoji: "handbag",
  tips: [
    "Am Körper tragen",
    "Ab und zu verwenden/damit interagieren",
    "Das Accessoire ist für die Figur wichtig/wertvoll/bedeutungsvoll"
  ],
  inspirations: [
    {
      name: "Accessoire",
      emoji: "handbag",
      values: accessoireValues
    }
  ]
};
