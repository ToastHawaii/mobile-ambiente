import { CategorieEntity } from "../Entities";
import { phone } from "./device/phone";
import { door } from "./device/door";
import { bell } from "./device/bell";
import { glass } from "./device/glass";

export const device: CategorieEntity = {
  name: "Gerät",
  things: [phone, glass, door, bell]
};
