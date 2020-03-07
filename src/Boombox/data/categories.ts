import { place } from "./place";
import { vehicle } from "./vehicle";
import { device } from "./device";
import { nature } from "./nature";
import { animal } from "./animal";
import { CategorieEntity } from "../Entities";

export const categories: CategorieEntity[] = [
  place,
  vehicle,
  device,
  nature,
  animal
];
