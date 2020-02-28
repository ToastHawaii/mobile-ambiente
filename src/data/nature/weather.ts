import { ThingEntity } from "../../Entities";

export const weather: ThingEntity = {
  name: "Wetter",
  emoji: "partly_sunny",
  sounds: [
    {
      name: "Blitz",
      emoji: "zap",
      files: [{ path: "weather/thunder-crispy-bang.mp3" }],
      type: "effect"
    }
  ]
};
