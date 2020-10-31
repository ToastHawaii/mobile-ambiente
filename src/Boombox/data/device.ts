// Copyright (C) 2020 Markus Peloso
// 
// This file is part of mobile-ambiente.
// 
// mobile-ambiente is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// mobile-ambiente is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with mobile-ambiente.  If not, see <http://www.gnu.org/licenses/>.

import { CategorieEntity } from "../Entities";
import { phone } from "./device/phone";
import { door } from "./device/door";
import { bell } from "./device/bell";
import { glass } from "./device/glass";
import { rubberDuck } from "./device/rubberDuck";
import { whistle } from "./device/whistle";

export const device: CategorieEntity = {
  name: "Gerät",
  things: [phone, glass, door, bell, rubberDuck, whistle]
};
