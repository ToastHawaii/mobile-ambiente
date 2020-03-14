import { CategorieEntity } from "../Entities";
import { phone } from "./device/phone";
import { door } from "./device/door";

export const device: CategorieEntity = { name: "Gerät", things: [phone, door] };