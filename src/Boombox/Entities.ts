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

export interface FileEntity {
  path: string;
  volume?: number;
  pan?: "random" | number;
  random?: number;
  fade?: number;
}

export interface ThingEntity {
  name: string;
  emoji: string;
  sounds: SoundEntity[];
  things?: ThingEntity[];
}

export interface SoundEntity {
  name: string;
  emoji: string;
  files: FileEntity[];
  type: "background" | "effect";
}

export interface CategorieEntity {
  name: string;
  things: ThingEntity[];
}
