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

export const weather: ThingEntity = {
  name: "Wetter",
  emoji: "partly_sunny",
  sounds: [
    {
      name: "Wind",
      emoji: "dash",
      files: [{ path: "weather/mountain-wind.mp3", fade: 1000 }],
      type: "background"
    },
    {
      name: "Regen",
      emoji: "cloud_rain",
      files: [{ path: "weather/rain.mp3", fade: 1000 }],
      type: "background"
    },
    {
      name: "Blitz",
      emoji: "zap",
      files: [{ path: "weather/thunder-crispy-bang.mp3" }],
      type: "effect"
    }
  ]
};
