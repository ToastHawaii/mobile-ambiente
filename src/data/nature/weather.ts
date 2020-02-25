import { ThingEntity } from "../../Boombox";

export const weather: ThingEntity = {
  name: "Wetter",
  emoji: "partly_sunny",
  sounds: [
    // {
    //   name: "Regen",
    //   emoji: "cloud_rain",
    //   files: [{ path: "weather/distant-forest-ambience.mp3" }],
    //   type: "background"
    // },
    {
      name: "Blitz",
      emoji: "zap",
      files: [{ path: "weather/thunder-crispy-bang.mp3" }],
      type: "effect"
    }
  ]
};
