import { TopicEntity } from "../../Entities";
import { job, hobby } from "../shared";

export const obsession: TopicEntity = {
  name: "Zwang",
  emoji: "coffee",
  tips: [
    "Immer gleich wiederholen (Running Gag)",
    "Mit verschiedenen Varianten wiederholen (Spannung: Was kommt als nächstes?)"
  ],
  inspirations: [
    {
      name: "Tick",
      emoji: "zap",
      values: [
        "Kratzt sich ständig am Kopf",
        "Ständiges Nasejucken",
        "Zucken der Mundwinkel",
        "Rucken des Kopfes",
        "Reiben im Schritt",
        "Hochziehen der Augenbrauen",
        "Zwinkern mit einem Auge",
        "Ständiges Räuspern",
        "Schuhtick",
        "Kleptomanie (Zwang etwas stehlen zu müssen)",
        "Waschzwang",
        "Pyromanie (Zwang, ein Feuer zu legen)"
      ]
    },
    {
      name: "Phobie",
      emoji: "ghost",
      values: [
        "Aviophopie (Flugangst)",
        "Anuptaphobie (Angst alleinstehend zu bleiben)",
        "Klaustrophobie (Angst vor engen Räumen)",
        "Agoraphobie (Angst vor freien grossen Plätzen)",
        "Arachnophobie (Angst vor Spinnen)",
        "Herpetophobie (Angst vor Kriechtieren)",
        "Hippopotomonstrosesquippedaliophobie (Angst vor langen Wörtern ;-) (eigentlich: Sesquipedalophobie)",
        "Caligynephobie (Angst vor schönen Frauen)",
        "Genophobie (Angst vor Liebe/Nähe)",
        "Dentophobie (Angst vor dem Zahnarzt)",
        "Chaetophobie (Angst vor Haaren)",
        "Mysophobie (Angst vor Unsauberkeit/Bakterien/Krankheiten)",
        "Gephyrophobie (Brücken zu überqueren)",
        "Erythrophobie (Angst vor dem Erröten)",
        "Dysmorphophobie (Angst vor der Hässlichkeit des eigenen Gesichts oder Körpers)",
        "Akrophobie (Höhenangst oder Höhenschwindel)",
        "Keraunophobie (Angst vor Donner)",
        "Elektrophobie (Angst vor Elektrogeräten)",
        "Nyktophobie (Angst vor der Dunkelheit oder Nacht)",
        "Astraphobie (Angst vor Blitzen)",
        "Phobophobie (Angst eine Phobie zu erleiden)"
      ]
    },
    job,
    hobby
  ]
};
