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
import { emotion, enjoyableEmotion, thing, animal } from "../shared";

export const relationship: TopicEntity = {
  name: "Beziehung",
  emoji: "people_holding_hands_tone4_tone2",
  tips: [
    "Kann Teil des Problems sein, oder auch nur unterstützen",
    "Sich treffen lassen/Veränderung zu lassen",
    "Emotion kann sich auf Gegenüber beziehen, muss aber nicht",
    "Eine Figur kann eine Haltung/Emotion/Status gegenüber einem Gegenstand haben, z.B. die Figur geht sorgsam/unsorgsam mit dem Gegenstand um oder fürchtet sich davor ihn zu berühren"
  ],
  inspirations: [
    {
      name: "Beziehung",
      emoji: "people_holding_hands_tone4_tone2",
      values: [
        "Ehepaar",
        "Vater/Kind",
        "Mutter/Kind",
        "Schwiegermutter und Schwiegertochter/Sohn o.ä.",
        "Geschwister",
        "Grosseltern und Enkel",
        "Stiefeltern/Stiefkind",
        "Patchwork-Familie",
        "Ehepaar",
        "Prostituierte und Freier",
        "Alternder Liebhaber",
        "Erwischter Geliebter",
        "Dreiecksverhältnis",
        "Erste Verabredung",
        "Schwules Pärchen",
        "Ex-Frau und neue Frau",
        "Ex-Mann und neuer Mann",
        "Lehrer und Schüler",
        "Lehrer und Schulleiter",
        "Lehrer und Eltern",
        "Schüler und Gang",
        "Verrückter Professor",
        "Ausbildungsoffizier und Rekrut",
        "Wächter und Gefangener",
        "Rechtsanwalt und Klient",
        "Richter und Rechtsanwalt",
        "Kriminalkommissar und Ganove/Verbrecher",
        "Autobahnpolizist und Autofahrer",
        "Sheriff und Gangsterbande",
        "Verkehrspolizist und Temposünder (auch Knöllchenverteiler und Falschparker)",
        "Terrorist und Geisel",
        "Angeklagter und Richter",
        "Psychopath und Opfer",
        "Film/Popstar und Fan",
        "Schauspieler und Regisseur",
        "Regisseur und Produzent",
        "Schauspieler und Stunt-Double",
        "Spermium und Eizelle",
        "X-Chromosom und Y-Chromosom",
        "Blutzelle und Bakterium",
        "PC und Benutzer",
        "Früchte in der Obstschale",
        "Roboter und sein Schöpfer",
        "Kind und Spielzeug/Puppe",
        "Bauchredner und Puppe",
        "Zahnstocher und Zahn/Gebiss",
        "5-Euro-Schein und 100-Euro-Schein",
        "Hund und Knochen",
        "Ratte und Laborwissenschaftler",
        "Fisch und der Wurm am Haken",
        "Frosch und Prinzessin",
        "Präparator und Tier",
        "Herrchen/Frauchen/Kind und Haustier",
        "(schlechtes) Gewissen und (zugehöriger) Mensch",
        "Gott und Mensch",
        "Gott und Teufel",
        "Buddha und Christus",
        "Dämon und Engel",
        "Alice und das weisse Kaninchen",
        "Astronaut und Ausserirdischer",
        "Seele und Person",
        "Erste Begegnung (Mensch und Ausserirdischer)",
        "'weisse Mäuse' und die Person, die halluziniert",
        "Mensch und Spiegelbild",
        "Person und eingebildeter Freund (z.B. Harvey)",
        "Kapitän und Geist",
        "romantischer Mann und die Blumen, die er mit sich trägt",
        "Totengräber und Geist/Leiche",
        "Cowboy und Indianer",
        "Räuber und Gendarm",
        "Batman und Robin",
        "Kasper und Seppel/Grossmutter/Krokodil...",
        "Big Brother und Kandidat",
        "Kandidat und Quizshowmaster",
        "Pilot und Crew/Passagiere/Stewardess...",
        "Chef und Mitarbeiter/Sekretärin",
        "Präsident und Kabinett (insb. in Kriegszeiten)",
        "Politiker und Wähler",
        "Buchhalter und Geschäftsmann/Frau",
        "Vorarbeiter und Arbeitskolonne",
        "Fabrikarbeiter und Konzernchef",
        "Herr und Diener/Dienstmädchen",
        "Dekorateur/Feng-Shui-Berater und Wohnungseigentümer",
        "Boxtrainer und Boxer (auch für andere Sportarten)",
        "Räuber/Mörder und sein bester Freund",
        "Waffenhändler und Pazifist",
        "Croupier und Roulettespieler",
        "Arzt und Patient/Krankenschwester",
        "Psychiater und Patient",
        "Tierarzt und Patient/Besitzer des Tiers",
        "Wärter und Psychisch Kranker",
        "Assistenzarzt und Chefarzt",
        "Schönheitschirurg und alterndes Topmodel",
        "Papst und Kardinal",
        "Priester und Gemeindemitglied",
        "Priester und Messdiener",
        "Guru und Jünger",
        "Kellner und Gast",
        "Verkäufer und Kunde",
        "Taxifahrer und Kunde",
        "Massschneider und Kunde",
        "Friseur und Kunde",
        "Automechaniker und Autobesitzer",
        "Bus/U-Bahn-Fahrer und Fahrgast",
        "Totengräber unter sich ...",
        "Mitarbeiter der Einwanderungsbehörde und Einwanderer ...",
        "McDonalds-Manager und 'Ökokrieger'",
        "Herr und Sklave",
        "Freunde aus der Kindheit, die sich wiedersehen"
      ]
    },
    emotion,
    enjoyableEmotion,
    thing,
    animal
  ]
};
