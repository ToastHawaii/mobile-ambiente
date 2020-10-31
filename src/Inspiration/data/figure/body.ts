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

import { TopicEntity } from "../../Entities";
import { emotion, enjoyableEmotion } from "../shared";

export const body: TopicEntity = {
  name: "Körper",
  emoji: "person_standing",
  tips: [
    "Körperhaltung",
    "Körperbau",
    "Körperteil: Leicht, schwer, führt, ist wichtig, mit Emotion kombinieren"
  ],
  inspirations: [
    {
      name: "Körperteil",
      emoji: "foot_tone1",
      values: [
        "Achsel",
        "Arm",
        "Auge",
        "Augenlid",
        "Backe/Wange",
        "Bauch",
        "Bein",
        "Brust",
        "Busen",
        "Daumen",
        "Ellbogen/Ellenbogen",
        "Ferse",
        "Finger",
        "Fuss",
        "Gaumen",
        "Gesäss",
        "Hals",
        "Hand",
        "Haupt",
        "Hüfte",
        "Kinn",
        "Knie",
        "Kopf",
        "Leber",
        "Lippe",
        "Luftröhre",
        "Lunge",
        "Mund",
        "Nase",
        "Niere",
        "Oberarm",
        "Oberschenkel",
        "Ohr",
        "Rücken",
        "Schulter",
        "Stirn",
        "Unterarm",
        "Unterschenkel",
        "Wade",
        "Zahn",
        "Zehe",
        "Zunge"
      ]
    },
    emotion,
    enjoyableEmotion,
    {
      name: "Farbe",
      emoji: "blue_circle",
      values: [
        "Blau",
        "Braun",
        "Bronze",
        "Gelb",
        "Grau",
        "Grün",
        "Orange ",
        "Pink",
        "Platin",
        "Rosa ",
        "Rot",
        "Schwarz",
        "Silber",
        "Türkis",
        "Violett",
        "Weiss",
        "Beige",
        "Gold"
      ]
    },
  ]
};
