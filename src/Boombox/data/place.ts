import { CategorieEntity } from "../Entities";
import { forest } from "./place/forest";
import { city } from "./place/city";
import { stream } from "./place/stream";
import { sea } from "./place/sea";
import { kitchen } from "./place/kitchen";
import { pond } from "./place/pond";

export const place: CategorieEntity = {
  name: "Ort",
  things: [city, forest, stream, pond, kitchen, sea]
};
