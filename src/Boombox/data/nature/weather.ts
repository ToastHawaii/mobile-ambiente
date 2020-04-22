import { ThingEntity } from "../../Entities";

export const weather: ThingEntity = {
  name: "Wetter",
  emoji: "partly_sunny",
  sounds: [
    {
      name: "Wind",
      emoji: "dash",
      files: [{ path: "weather/mountain-wind.mp3" }],
      type: "background"
    },
    {
      name: "Regen",
      emoji: "cloud_rain",
      files: [{ path: "weather/rain.mp3" }],
      type: "background"
    },
    {
      name: "Blitz",
      emoji: "zap",
      files: [{ path: "weather/thunder-crispy-bang.mp3" }],
      type: "effect"
    }
  ]
};
