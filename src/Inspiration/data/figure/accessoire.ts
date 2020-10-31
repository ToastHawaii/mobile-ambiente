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

import { TopicEntity } from "../../Entities";
import { accessoireValues } from "../shared";

export const accessoire: TopicEntity = {
  name: "Accessoire",
  emoji: "handbag",
  tips: [
    "Am Körper tragen",
    "Ab und zu verwenden/damit interagieren",
    "Das Accessoire ist für die Figur wichtig/wertvoll/bedeutungsvoll"
  ],
  inspirations: [
    {
      name: "Accessoire",
      emoji: "handbag",
      values: accessoireValues
    }
  ]
};
