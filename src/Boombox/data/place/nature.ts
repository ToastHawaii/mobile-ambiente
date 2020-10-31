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
import { bird } from "../animal/bird";
import { weather } from "../nature/weather";
import { dog } from "../animal/dog";
import { insect } from "../animal/insect";
import { frog } from "../animal/frog";

export const nature: ThingEntity = {
  name: "Nature",
  emoji: "park",
  sounds: [
    {
      name: "Wald",
      emoji: "deciduous_tree",
      files: [{ path: "forest/bird-chorus.mp3", fade: 2000 }],
      type: "background"
    },
    {
      name: "Teich",
      emoji: "woman_rowing_boat_tone5",
      files: [
        { path: "pond/lake-waves.mp3" },
        { path: "pond/small-waves-hitting-boat.mp3" }
      ],
      type: "background"
    },
    {
      name: "Fluss",
      emoji: "park",
      files: [{ path: "stream/cave-waterfall.mp3" }],
      type: "background"
    }
  ],
  things: [bird, dog, frog, insect, weather]
};
