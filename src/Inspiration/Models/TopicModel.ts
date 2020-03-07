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
