import { CategorieEntity } from "../Boombox";
import { forest } from "./place/forest";
import { city } from "./place/city";

export const place: CategorieEntity = {
  name: "Ort",
  things: [forest, city]
};
