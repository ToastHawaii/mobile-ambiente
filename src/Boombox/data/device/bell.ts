import { ThingEntity } from "../../Entities";

export const bell: ThingEntity = {
  name: "Glocke",
  emoji: "bell",
  sounds: [
    {
      name: "Klingel",
      emoji: "door",
      files: [{ path: "door/doorbell.mp3" }],
      type: "effect"
    },
    {
      name: "Eingangsglocke",
      emoji: "door",
      files: [{ path: "door/shop-door-bell.mp3" }],
      type: "effect"
    },
    {
      name: "Kirchenglocke",
      emoji: "bell",
      files: [{ path: "bell/church-bell.mp3" }],
      type: "background"
    },
    {
      name: "Schuhlglocke",
      emoji: "bell",
      files: [{ path: "bell/school-bell.mp3" }],
      type: "effect"
    },
    {
      name: "Fahrradglocke",
      emoji: "bike",
      files: [{ path: "bell/bicycle-bell.mp3" }],
      type: "effect"
    },
    {
      name: "Serviceglocke",
      emoji: "bellhop",
      files: [{ path: "bell/service-bell.mp3" }],
      type: "effect"
    },
    {
      name: "Wecker",
      emoji: "alarm_clock",
      files: [{ path: "bell/alarm-clock-short.mp3" }],
      type: "background"
    }
  ]
};
