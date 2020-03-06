import { CategorieEntity } from "../Entities";
import { horse } from "./animal/horse";
import { cow } from "./animal/cow";
import { dog } from "./animal/dog";
import { bird } from "./animal/bird";
import { cat } from "./animal/cat";

export const animal: CategorieEntity = {
  name: "Tier",
  things: [bird, cat, dog, horse, cow]
};
