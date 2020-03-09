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
        "Bier zapfen, Flaschen öffnen uä. Thekentätigkeiten",
        "Meditieren (im Schneidersitz sitzen)",
        "Fernsehen (sitzend auf einen Punkt starren, mit Hilfe der Fernbedienung zappen)",
        "Kochen (Zutaten hinzufügen, Hitze einstellen, Umrühren, Würzen usw.)",
        "Töpfern und etwas Rundes formen an einer drehenden Töpferscheibe",
        "am Computer (-bildschirm) arbeiten und Tastatur bedienen",
        "aktiv am Fitnessgerät sein",
        "Boden wischen oder fegen",
        "Fenster putzen",
        "Fegen",
        "Beten (Kirche)",
        "Holz hacken",
        "Sägen",
        "Auto fahren (Lenken, Schalten)",
        "Gartenarbeit (Unkraut zupfen, Einpflanzen, Ernten, Rasen mähen)",
        "Blumen giessen",
        "Schwimmen",
        "Leiter hochsteigen",
        "Musizieren, z.B. Klavier, Gitarre, Geige spielen",
        "Ein Bild malen oder jemanden porträtieren",
        "Sport treiben, z.B. Dart, (Tisch-)Tennis, (Mini-)Golf",
        "Duschen oder Baden",
        "Nähen, Stricken, Häkeln",
        "Händewaschen",
        "Zähne putzen",
        "Nägel schneiden oder Lackieren",
        "Zigarette anzünden und rauchen",
        "Getränk einschenken und trinken",
        "Geschirr spülen",
        "sich sonnen (mit Handtuch ausbreiten, Eincremen)",
        "am Fliessband arbeiten",
        "handwerklich arbeiten (z.B. Schuh besohlen)"
      ]
    },
    job,
    hobby
  ]
};
