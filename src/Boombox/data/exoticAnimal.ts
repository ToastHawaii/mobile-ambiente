import { CategorieEntity } from "../Entities";
import { elephant } from "./animal/elephant";
import { monkey } from "./animal/monkey";
import { creature } from "./animal/creature";

export const exoticAnimal: CategorieEntity = {
  name: "Exotisches Tier",
  things: [elephant, monkey, creature]
};
