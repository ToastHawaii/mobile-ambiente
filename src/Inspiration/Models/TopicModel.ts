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

import { InspirationEntity } from "../Entities";

export class TopicModel {
  public name: string;
  public emoji: string;
  private values: string[];

  constructor(inspirationEntity: InspirationEntity) {
    this.name = inspirationEntity.name;
    this.emoji = inspirationEntity.emoji;
    this.values = inspirationEntity.values;
  }

  public next() {
    return this.values[this.randomInt(0, this.values.length - 1)];
  }

  private randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
