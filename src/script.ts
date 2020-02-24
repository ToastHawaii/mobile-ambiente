import { init, categories } from "./www/Boombox";

// import { Howl } from "howler";

function documentReady(fn: () => void) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

// function random(min: number, max: number) {
//   return Math.random() * (max - min) + min;
// }

// function noises(selector: string, radio: string, files: any[]) {
//   let container = document.querySelector(selector);
//   if (!container) return;

//   let radioContainer = document.querySelector(radio);
//   if (!radioContainer) return;

//   for (const file of files) {
//     const sound = new Howl({
//       src: ["https://media.zottelig.ch/clown/audio/" + file.name],
//       preload: false,
//       html5: true,
//       volume: file.volume,
//       loop: !file.random,
//       stereo: typeof file.pan === "number" ? file.pan : undefined,
//       onend: function() {
//         if (file.random) {
//           setTimeout(function() {
//             if (!running) return;

//             if (file.pan === "random") file.sound.stereo(random(-1, 1));
//             file.sound.play();
//           }, file.random * 1000);
//         }
//       }
//     } as any);

//     file.sound = sound;
//   }

//   let running = false;
//   container.addEventListener("click", function() {
//     try {
//       if (running) {
//         running = false;

//         for (const file of files) {
//           file.sound.stop();
//         }
//       } else {
//         running = true;

//         for (const file of files) {
//           if (!file.random) file.sound.play();
//           else {
//             setTimeout(function() {
//               if (!running) return;

//               if (file.pan === "random") file.sound.stereo(random(-1, 1));
//               file.sound.play();
//             }, file.random * 1000);
//           }
//         }
//       }
//     } catch (e) {
//       alert(e);
//     }
//   });

//   radioContainer.addEventListener("click", function() {
//     try {
//       if (running) {
//         running = false;

//         for (const file of files) {
//           file.sound.stop();
//         }
//       } else {
//         running = true;

//         for (const file of files) {
//           if (!file.random) file.sound.play();
//           else {
//             setTimeout(function() {
//               if (!running) return;

//               if (file.pan === "random") file.sound.stereo(random(-1, 1));
//               file.sound.play();
//             }, file.random * 1000);
//           }
//         }
//       }
//     } catch (e) {
//       alert(e);
//     }
//   });
// }

documentReady(function() {
  init(".main", categories);
  // noises(".forest", ".background", forest);
});
