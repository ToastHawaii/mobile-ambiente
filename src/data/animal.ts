import { CategorieEntity } from "../Boombox";
import { horse } from "./animal/horse";
import { cow } from "./animal/cow";
import { dog } from "./animal/dog";
import { bird } from "./animal/bird";

export const animal: CategorieEntity = {
  name: "Tier",
  things: [bird, dog, horse, cow]
};
