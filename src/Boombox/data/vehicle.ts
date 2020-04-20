import { CategorieEntity } from "../Entities";
import { car } from "./vehicle/car";
import { train } from "./vehicle/train";

export const vehicle: CategorieEntity = {
  name: "Fahrzeug",
  things: [car, train]
};
