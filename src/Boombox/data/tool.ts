import { CategorieEntity } from "../Entities";
import { hammer } from "./tool/hammer";
import { airHammer } from "./tool/airHammer";
import { explosion } from "./tool/explosion";
import { window } from "./tool/window";

export const tool: CategorieEntity = {
  name: "Werkzeug",
  things: [hammer, airHammer, window, explosion]
};
