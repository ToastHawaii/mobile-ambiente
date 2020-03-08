import { CategorieEntity } from "../Entities";
import { place } from "./scene/place";
import { relationship } from "./scene/relationship";
import { activity } from "./scene/activity";
import { genre } from "./scene/genre";

export const scene: CategorieEntity = {
  name: "Szene",
  things: [place, relationship, activity, genre]
};
