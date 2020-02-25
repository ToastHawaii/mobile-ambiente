import { CategorieEntity } from "../Boombox";
import { weather } from "./nature/weather";

export const nature: CategorieEntity = { name: "Natur", things: [weather] };
