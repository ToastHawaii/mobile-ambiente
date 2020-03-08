import { CategorieEntity } from "../Entities";
import { body } from "./figure/body";
import { model } from "./figure/model";
import { obsession } from "./figure/obsession";

export const figure: CategorieEntity = {
  name: "Figur",
  things: [body, model, obsession]
};
