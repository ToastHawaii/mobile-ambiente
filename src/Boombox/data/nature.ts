import { CategorieEntity } from "../Entities";
import { weather } from "./nature/weather";

export const nature: CategorieEntity = { name: "Natur", things: [weather] };
