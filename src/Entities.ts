export interface FileEntity {
  path: string;
  volume?: number;
  pan?: "random" | number;
  random?: number;
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
