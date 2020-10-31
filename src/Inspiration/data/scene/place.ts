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

export const place: TopicEntity = {
  name: "Ort",
  emoji: "park",
  tips: [
    "Zeit nehmen den Raum einzurichten/zu bespielen",
    "Bei Scene painting: Stimmung hinzufügen, von gross zu klein gehen, ein unerwartetes Detail hinzufügen",
    "Eine Figur kann eine Haltung/Emotion/Status gegenüber einem Raum haben z.B. die Figur muss sich beim Betreten des Raumes erst orientieren"
  ],
  inspirations: [
    {
      name: "Raum",
      emoji: "couch",
      values: [
        "Bibliothek",
        "Einwohnermeldeamt",
        "Kino",
        "Konzertsaal",
        "Theater",
        "Praxis",
        "Standesamt",
        "KFZ-Zulassungsstelle",
        "Museum",
        "Arbeitszimmer",
        "Badezimmer",
        "Besenkammer",
        "Hobbyraum",
        "Kinderzimmer",
        "Schlafzimmer",
        "Wohnzimmer",
        "Küche",
        "Garage",
        "begehbarer Schrank",
        "Abstellraum",
        "Musikzimmer",
        "Gästezimmer",
        "Speisekammer",
        "Keller",
        "Dachboden",
        "Ankleidezimmer",
        "Kaminzimmer",
        "Balkon",
        "Gartenhaus",
        "WG Küche",
        "Speisezimmer",
        "Haushaltsraum"
      ]
    },
    {
      name: "Fortbewegungsmittel",
      emoji: "red_car",
      values: [
        "Schiff/U-Boot (drauf oder drinnen)",
        "Kreuzfahrtschiff",
        "Fischkutter",
        "Flugzeug",
        "Auto, LKW, Bus",
        "Wohnwagen, Wohnmobil",
        "Motorrad",
        "Zug",
        "Seilbahn",
        "Kutsche",
        "Fahrstuhl",
        "Zeppelin",
        "Ballonkorb",
        "Strassenbahn",
        "Bus",
        "auf der Kanonenkugel",
        "auf dem Pferd"
      ]
    },
    {
      name: "Gebäude",
      emoji: "house_with_garden",
      values: [
        "Aussichtsturm",
        "Bauernhaus",
        "Geschäft",
        "Hochhaus",
        "Hühnerstall",
        "Kaserne",
        "Kirche/Kapelle/Kathedrale",
        "Kloster",
        "Krankenhaus (OP, Kreissaal, Notaufnahme, Säuglingstation, Röntgenraum, Gipsraum)",
        "Polizeistation (Ausnüchterungszelle)",
        "Rathaus",
        "Wolkenkratzer",
        "Stadion",
        "Pyramide",
        "Gefängnis",
        "Eisstation",
        "Eiffelturm",
        "Forsthaus",
        "Anwaltskanzlei",
        "Baumarkt",
        "Betriebsversammlung",
        "Bordell",
        "Büro",
        "Chefsekretariat",
        "Fabrik (Fliessband)",
        "Friseur",
        "Grossraumbüro",
        "Hafen",
        "Internetcafe",
        "Kantine",
        "Kieferorthopäde",
        "Kindergarten",
        "Markthalle",
        "Marktplatz",
        "Massagepraxis",
        "Messestand",
        "Muckibude/Fitnessstudio",
        "Nagelstudio",
        "Schlachterei",
        "Schule",
        "Sonnenstudio",
        "Steuerberaterkanzlei",
        "Supermarkt",
        "Waschsalon",
        "Werbeagentur",
        "Würstchenbude",
        "Zahnarzt",
        "Zoofachgeschäft",
        "Zweithaarstudio"
      ]
    },
    {
      name: "Land",
      emoji: "japan",
      values: [
        "Argentinien",
        "Australien",
        "Belgien",
        "Deutschland",
        "Frankreich",
        "Italien",
        "Japan",
        "Mexico",
        "Niederlande",
        "Österreich",
        "Russland",
        "Schweiz",
        "Spanien",
        "USA"
      ]
    }
  ]
};
