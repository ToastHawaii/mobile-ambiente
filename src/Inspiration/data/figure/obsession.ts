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
        "Pyromanie (Zwang, ein Feuer zu legen)",

        // https://improwiki.com/de/ideen-fuer-vorgaben/liste_weiterer_ticks_von_figuren
        "Die Figur versucht, ihren 'unsichtbaren' Freund vor den anderen zu verstecken",
        "Ein Verkäufer, der alles verkaufen möchte, was er sieht oder anfasst",
        "Eine Figur, die eine ganze Packung Beruhigungsmittel geschluckt hat",
        "Die Figur ist überzeugt davon, unsichtbar zu sein (ist es aber eigentlich gar nicht)",
        "Die Figur ist ein böses Genie, das die Weltherrschaft an sich reißen möchte",
        "Ein Astronaut, der die anderen Figuren in der Szene für eine neu entdeckte außerirdische Lebensform hält, die er gerade entdeckt hat",
        "Figur verhält sich wie ein hungriger Dinosaurier",
        "Die Figur macht eine andere Figur der Szene mit einer Verzögerung von 5 Sekunden nach.",
        "Figur verhält sich wie verschiedenste Darsteller eines Zirkus",
        "Die Figur kann nur mit Hilfe von Gesten kommunizieren (Scharaden)",
        "Die Figur denkt, dass alle anderen Figuren sie ständig bewerten und beurteilen",
        
        // https://improwiki.com/de/wiki/improtheater/fast_food_stanislawski
        "Du willst den anderen verführen",
        "Du bist ein Nerd",
        "Dir gefällt es, Leute zum Lachen zu bringen",
        "Du möchtest andere Leute beeindrucken",
        "Du bist eine fiese Person",
        "Du versuchst, normal zu erscheinen",
        "Du bist ein Optimist",
        "Du bist ein Pessimist",
        "Du wirst niemals eine Freund*in finden",
        
        // Eigene
        "Ohne Kaffee geht es nicht."
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
