import { CategorieEntity } from "../Entities";
import { hammer } from "./tool/hammer";
import { airHammer } from "./tool/airHammer";

export const tool: CategorieEntity = {
  name: "Werkzeug",
  things: [hammer, airHammer]
};
