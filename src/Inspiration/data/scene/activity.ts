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
import { job, hobby } from "../shared";

export const activity: TopicEntity = {
  name: "Tätigkeit",
  emoji: "broom",
  tips: [
    "Zeit nehmen zum Ausprobieren/Auskosten",
    "Über etwas anderes Reden als die Tätigkeit",
    "Zwei Dimensionen: ge­schickt - ungeschickt, motiviert - unmotiviert"
  ],
  inspirations: [
    {
      name: "Routine",
      emoji: "shower",
      values: [
        "Tapezieren",
        "Streichen (Wände, Fenster)",
        "Bügeln",
        "Wäsche aufhängen",
        "Thekentätigkeiten ",
        "Bier zapfen",
        "Flaschen öffnen",
        "Meditieren (im Schneidersitz sitzen)",
        "Fernsehen (sitzend auf einen Punkt starren)",
        "Fernsehen (mit Hilfe der Fernbedienung zappen)",
        "Kochen (Zutaten hinzufügen, Hitze einstellen, Umrühren, Würzen usw.)",
        "Töpfern und etwas Rundes formen an einer drehenden Töpferscheibe",
        "am Computer(-bildschirm) arbeiten und Tastatur bedienen",
        "aktiv am Fitnessgerät sein",
        "Boden wischen oder fegen",
        "Fenster putzen",
        "Fegen",
        "Beten (Kirche)",
        "Holz hacken",
        "Sägen",
        "Auto fahren (Lenken, Schalten)",
        "Gartenarbeit",
        "Unkraut zupfen",
        "Ernten",
        "Einpflanzen",
        "Baumschneiden",
        "Rasen mähen",
        "Blumen giessen",
        "Schwimmen",
        "Leiter hochsteigen",
        "Musizieren",
        "Klavier spielen",
        "Gitarre spielen",
        "Geige spielen",
        "Flöte spielen",
        "Schlagzeug spielen",
        "Ein Bild malen",
        "Jemanden porträtieren",
        "Sport treiben",
        "Dart spielen",
        "Tischtennis spielen",
        "Tennis spielen",
        "Minigolf spielen",
        "Golf spielen",
        "Kegeln",
        "Hämmern",
        "Bild aufhängen",
        "Backen",
        "Teig kneten",
        "Aufräumen",
        "Duschen",
        "Baden",
        "Nähen",
        "Stricken",
        "Häkeln",
        "Händewaschen",
        "Zähne putzen",
        "Nägel schneiden",
        "Nägel lackieren",
        "Zigarette anzünden und rauchen",
        "Getränk einschenken",
        "Trinken",
        "Geschirr spülen",
        "Badetuch ausbreiten",
        "Eincremen",
        "am Fliessband arbeiten",
        "handwerklich arbeiten",
        "Schuh besohlen",
        "Schrauben drehen",
        "Einräumen",
        "Melken",
        "Schneiden (z.B. Gemüse)",
        "Zeitung lesen",
        "Glühbirne wechseln",
        "Schaufeln",
        "Warten (Uhr schauen, Hin- und her­ge­hen)",
        "Schreiben mit Stift",
        "Schreiben mit Schreibmaschine",
        "Maschine bedienen",
        "Pumpen",
        "Rudern",
        "Angeln",
        "Fussball spielen",
        "Joggen",
        "Dehnen",
        "Gymnastik machen",
        "Drink mixen"
      ]
    },
    job,
    hobby
  ]
};
