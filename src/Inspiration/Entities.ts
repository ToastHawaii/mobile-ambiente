export interface CategorieEntity {
  name: string;
  things: TopicEntity[];
}

export interface TopicEntity {
  name: string;
  emoji: string;
  tips: string[];
  inspirations: InspirationEntity[];
}

export interface InspirationEntity {
  name: string;
  emoji: string;
  values: string[];
}
