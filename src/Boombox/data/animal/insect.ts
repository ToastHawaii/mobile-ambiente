import { ThingEntity } from "../../Entities";

export const insect: ThingEntity = {
  name: "Insekt",
  emoji: "beetle",
  sounds: [
    {
      name: "Fliege",
      emoji: "poop",
      files: [{ path: "fly/fly-swarm.mp3" }],
      type: "background"
    },
    {
      name: "Biene",
      emoji: "bee",
      files: [{ path: "bee/beehive.mp3", fade: 1000 }],
      type: "background"
    },
    {
      name: "Grasshüpfer",
      emoji: "cricket",
      files: [{ path: "grasshopper/grasshopper.mp3" }],
      type: "background"
    }
  ]
};
