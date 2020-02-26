import { CategorieEntity } from "../Boombox";
import { horse } from "./animal/horse";
import { cow } from "./animal/cow";

export const animal: CategorieEntity = { name: "Tier", things: [horse, cow] };
