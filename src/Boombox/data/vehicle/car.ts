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

export const car: ThingEntity = {
  name: "Auto",
  emoji: "red_car",
  sounds: [
    {
      name: "Motor",
      emoji: "red_car",
      files: [{ path: "car/engine.mp3" }],
      type: "background"
    },
    {
      name: "Hupe",
      emoji: "red_car",
      files: [{ path: "car/car-horn.mp3" }],
      type: "effect"
    },
    {
      name: "Motor start",
      emoji: "red_car",
      files: [{ path: "car/engine-on-off-1.mp3" }],
      type: "effect"
    },
    {
      name: "Bremsen",
      emoji: "red_car",
      files: [{ path: "car/car-breaks.mp3" }],
      type: "effect"
    },
    {
      name: "Unfall",
      emoji: "fireworks",
      files: [{ path: "car/car-crash.mp3" }],
      type: "effect"
    }
  ]
};
