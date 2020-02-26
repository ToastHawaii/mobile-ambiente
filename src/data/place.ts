import { CategorieEntity } from "../Boombox";
import { forest } from "./place/forest";
import { city } from "./place/city";
import { stream } from "./place/stream";

export const place: CategorieEntity = {
  name: "Ort",
  things: [city, forest, stream]
};
