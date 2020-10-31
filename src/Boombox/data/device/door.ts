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

import { ThingEntity } from "../../Entities";

export const door: ThingEntity = {
  name: "Tür",
  emoji: "door",
  sounds: [
    {
      name: "Klingel",
      emoji: "door",
      files: [{ path: "door/doorbell.mp3" }],
      type: "effect"
    },
    {
      name: "Eingangsglocke",
      emoji: "door",
      files: [{ path: "door/shop-door-bell.mp3" }],
      type: "effect"
    },
    {
      name: "Knarren",
      emoji: "door",
      files: [{ path: "door/old-creaky-door.mp3" }],
      type: "effect"
    }
  ]
};
