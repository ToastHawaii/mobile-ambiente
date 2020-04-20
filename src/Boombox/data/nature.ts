import { CategorieEntity } from "../Entities";
import { weather } from "./nature/weather";
import { fire } from "./nature/fire";

export const nature: CategorieEntity = {
  name: "Natur",
  things: [weather, fire]
};
