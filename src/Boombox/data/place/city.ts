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
import { dog } from "../animal/dog";
import { weather } from "../nature/weather";
import { car } from "../vehicle/car";
import { cat } from "../animal/cat";
import { airHammer } from "../tool/airHammer";
import { bell } from "../device/bell";

export const city: ThingEntity = {
  name: "Stadt",
  emoji: "cityscape",
  sounds: [
    {
      name: "Strasse",
      emoji: "cityscape",
      files: [{ path: "city/residential-traffic.mp3" }],
      type: "background"
    },
    {
      name: "Park",
      emoji: "deciduous_tree",
      files: [{ path: "city/park.mp3" }],
      type: "background"
    }
  ],
  things: [car, cat, dog, airHammer, bell, weather]
};
