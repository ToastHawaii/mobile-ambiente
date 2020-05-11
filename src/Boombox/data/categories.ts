import { place } from "./place";
import { vehicle } from "./vehicle";
import { device } from "./device";
import { nature } from "./nature";
import { animal } from "./animal";
import { CategorieEntity } from "../Entities";
import { tool } from "./tool";
import { voice } from "./voice";
import { exoticAnimal } from "./exoticAnimal";

export const categories: CategorieEntity[] = [
  place,
  vehicle,
  device,
  animal,
  tool,
  nature,
  voice,
  exoticAnimal
];
