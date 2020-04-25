import { CategorieEntity } from "../Entities";
import { nature } from "./place/nature";
import { city } from "./place/city";
import { sea } from "./place/sea";
import { kitchen } from "./place/kitchen";

export const place: CategorieEntity = {
  name: "Ort",
  things: [city, nature, kitchen, sea]
};
