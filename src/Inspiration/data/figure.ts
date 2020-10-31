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
import { body } from "./figure/body";
import { model } from "./figure/model";
import { obsession } from "./figure/obsession";
import { accessoire } from "./figure/accessoire";
import { attitude } from "./figure/attitude";
import { voice } from "./figure/voice";

export const figure: CategorieEntity = {
  name: "Figur",
  things: [voice, attitude, body, model, accessoire, obsession]
};
