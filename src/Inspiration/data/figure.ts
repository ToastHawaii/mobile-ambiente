import { CategorieEntity } from "../Entities";
import { body } from "./figure/body";
import { model } from "./figure/model";
import { obsession } from "./figure/obsession";
import { accessoire } from "./figure/accessoire";
import { attitude } from "./figure/attitude";

export const figure: CategorieEntity = {
  name: "Figur",
  things: [attitude, body, model, accessoire, obsession]
};
