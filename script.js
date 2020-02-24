/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Boombox_1 = __webpack_require__(/*! ./www/Boombox */ "./src/www/Boombox.ts");
// import { Howl } from "howler";
function documentReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
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
documentReady(function () {
    Boombox_1.init(".main", Boombox_1.categories);
    // noises(".forest", ".background", forest);
});

/***/ }),

/***/ "./src/www/Boombox.ts":
/*!****************************!*\
  !*** ./src/www/Boombox.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.forest = {
    name: "Wald",
    emoji: "deciduous_tree",
    sounds: [{
        name: "Normal",
        files: [{ path: "forest/distant-forest-ambience.mp3" }],
        type: "background"
    }]
};
exports.categories = [{ name: "Ort", things: [exports.forest] }, { name: "Tier", things: [] }];
function init(selector, categories) {
    var $main = $(selector);
    var $menu = $("<div class=\"ui pointing secondary menu\"></div>").appendTo($main);
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var c = categories_1[_i];
        $("<a class=\"item\" data-tab=\"" + c.name + "\">" + c.name + "</a>").appendTo($menu);
        var $content = $("<div class=\"ui tab\" data-tab=\"" + c.name + "\"></div>").insertAfter($menu);
        var $thingsMenu = $("<div class=\"ui pointing labeled icon menu\"></div>").appendTo($content);
        for (var _a = 0, _b = c.things; _a < _b.length; _a++) {
            var t = _b[_a];
            $("\n        <a class=\"item\" data-tab=\"" + c.name + "-" + t.name + "\">\n          <em data-emoji=\":" + t.emoji + ":\"></em>\n          " + t.name + "\n        </a>\n        ").appendTo($thingsMenu);
            var $thingsContent = $("\n        <div class=\"ui tab\" data-tab=\"" + c.name + "-" + t.name + "\"></div>\n        ").appendTo($content);
            for (var _c = 0, _d = t.sounds; _c < _d.length; _c++) {
                var s = _d[_c];
                $("\n        <div class=\"ui basic button\">\n            <em data-emoji=\":" + t.emoji + ":\" class=\"medium\"></em><br />\n            " + s.name + "\n            " + (s.type === "background" ? "\n            <a class=\"ui right corner label\">\n                <i class=\"sync icon\"></i>\n            </a>" : "") + "\n            <a class=\"hidden bottom floating ui red label\">\n              <i class=\"stop icon\"></i>\n            </a>\n            <a class=\"hidden bottom floating ui teal label\">\n              <i class=\"play icon\"></i>\n            </a>\n          </div>\n        ").appendTo($thingsContent);
            }
        }
    }
    $(".menu .item").tab();
}
exports.init = init;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd3d3L0Jvb21ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBO0FBRUEsU0FBUyxhQUFULENBQXVCLEVBQXZCLEVBQXFDO0FBQ25DLFFBQ0UsU0FBUyxVQUFULEtBQXdCLFVBQXhCLElBQ0EsU0FBUyxVQUFULEtBQXdCLGFBRjFCLEVBR0U7QUFDQSxtQkFBVyxFQUFYLEVBQWUsQ0FBZjtBQUNELEtBTEQsTUFLTztBQUNMLGlCQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxFQUE5QztBQUNEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxjQUFjO0FBQ1osbUJBQUssT0FBTCxFQUFjLG9CQUFkO0FBQ0E7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7OztBQ3JDYSxpQkFBc0I7QUFDakMsVUFBTSxNQUQyQjtBQUVqQyxXQUFPLGdCQUYwQjtBQUdqQyxZQUFRLENBQ047QUFDRSxjQUFNLFFBRFI7QUFFRSxlQUFPLENBQUMsRUFBRSxNQUFNLG9DQUFSLEVBQUQsQ0FGVDtBQUdFLGNBQU07QUFIUixLQURNO0FBSHlCLENBQXRCO0FBV0EscUJBQWdDLENBQzNDLEVBQUUsTUFBTSxLQUFSLEVBQWUsUUFBUSxDQUFDLGNBQUQsQ0FBdkIsRUFEMkMsRUFFM0MsRUFBRSxNQUFNLE1BQVIsRUFBZ0IsUUFBUSxFQUF4QixFQUYyQyxDQUFoQztBQUtiLFNBQWdCLElBQWhCLENBQXFCLFFBQXJCLEVBQXVDLFVBQXZDLEVBQW9FO0FBQ2xFLFFBQU0sUUFBUSxFQUFFLFFBQUYsQ0FBZDtBQUNBLFFBQU0sUUFBUSxFQUFFLGtEQUFGLEVBQW9ELFFBQXBELENBQ1osS0FEWSxDQUFkO0FBR0EsU0FBZ0IscUNBQWhCLEVBQWdCLHdCQUFoQixFQUFnQixJQUFoQixFQUE0QjtBQUF2QixZQUFNLElBQUMsZ0JBQVA7QUFDSCxVQUFFLGtDQUE2QixFQUFFLElBQS9CLEdBQW1DLEtBQW5DLEdBQXdDLEVBQUUsSUFBMUMsR0FBOEMsTUFBaEQsRUFBd0QsUUFBeEQsQ0FBaUUsS0FBakU7QUFDQSxZQUFNLFdBQVcsRUFDZixzQ0FBaUMsRUFBRSxJQUFuQyxHQUF1QyxXQUR4QixFQUVmLFdBRmUsQ0FFSCxLQUZHLENBQWpCO0FBSUEsWUFBTSxjQUFjLEVBQ2xCLHFEQURrQixFQUVsQixRQUZrQixDQUVULFFBRlMsQ0FBcEI7QUFJQSxhQUFnQixtQkFBRSxNQUFsQixFQUFnQixjQUFoQixFQUFnQixJQUFoQixFQUEwQjtBQUFyQixnQkFBTSxJQUFDLE1BQVA7QUFDSCxjQUFFLDRDQUM0QixFQUFFLElBRDlCLEdBQ2tDLEdBRGxDLEdBQ3NDLEVBQUUsSUFEeEMsR0FDNEMsbUNBRDVDLEdBRXFCLEVBQUUsS0FGdkIsR0FFNEIsdUJBRjVCLEdBR0ksRUFBRSxJQUhOLEdBR1UsMEJBSFosRUFLSyxRQUxMLENBS2MsV0FMZDtBQU1BLGdCQUFNLGlCQUFpQixFQUFFLGdEQUNTLEVBQUUsSUFEWCxHQUNlLEdBRGYsR0FDbUIsRUFBRSxJQURyQixHQUN5QixxQkFEM0IsRUFFbEIsUUFGa0IsQ0FFVCxRQUZTLENBQXZCO0FBSUEsaUJBQWdCLG1CQUFFLE1BQWxCLEVBQWdCLGNBQWhCLEVBQWdCLElBQWhCLEVBQTBCO0FBQXJCLG9CQUFNLElBQUMsTUFBUDtBQUNILGtCQUFFLDhFQUVxQixFQUFFLEtBRnZCLEdBRTRCLGdEQUY1QixHQUdJLEVBQUUsSUFITixHQUdVLGdCQUhWLElBS0ksRUFBRSxJQUFGLEtBQVcsWUFBWCxHQUNJLGtIQURKLEdBS0ksRUFWUixJQVVVLHVSQVZaLEVBbUJHLFFBbkJILENBbUJZLGNBbkJaO0FBb0JEO0FBQ0Y7QUFDRjtBQUVELE1BQUUsYUFBRixFQUFpQixHQUFqQjtBQUNEO0FBcERELG9CIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdC50c1wiKTtcbiIsImltcG9ydCB7IGluaXQsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi93d3cvQm9vbWJveFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgSG93bCB9IGZyb20gXCJob3dsZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGRvY3VtZW50UmVhZHkoZm46ICgpID0+IHZvaWQpIHtcclxuICBpZiAoXHJcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHxcclxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIlxyXG4gICkge1xyXG4gICAgc2V0VGltZW91dChmbiwgMSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZuKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuLy8gICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBub2lzZXMoc2VsZWN0b3I6IHN0cmluZywgcmFkaW86IHN0cmluZywgZmlsZXM6IGFueVtdKSB7XHJcbi8vICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4vLyAgIGlmICghY29udGFpbmVyKSByZXR1cm47XHJcblxyXG4vLyAgIGxldCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmFkaW8pO1xyXG4vLyAgIGlmICghcmFkaW9Db250YWluZXIpIHJldHVybjtcclxuXHJcbi8vICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbi8vICAgICBjb25zdCBzb3VuZCA9IG5ldyBIb3dsKHtcclxuLy8gICAgICAgc3JjOiBbXCJodHRwczovL21lZGlhLnpvdHRlbGlnLmNoL2Nsb3duL2F1ZGlvL1wiICsgZmlsZS5uYW1lXSxcclxuLy8gICAgICAgcHJlbG9hZDogZmFsc2UsXHJcbi8vICAgICAgIGh0bWw1OiB0cnVlLFxyXG4vLyAgICAgICB2b2x1bWU6IGZpbGUudm9sdW1lLFxyXG4vLyAgICAgICBsb29wOiAhZmlsZS5yYW5kb20sXHJcbi8vICAgICAgIHN0ZXJlbzogdHlwZW9mIGZpbGUucGFuID09PSBcIm51bWJlclwiID8gZmlsZS5wYW4gOiB1bmRlZmluZWQsXHJcbi8vICAgICAgIG9uZW5kOiBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICBpZiAoZmlsZS5yYW5kb20pIHtcclxuLy8gICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIGlmICghcnVubmluZykgcmV0dXJuO1xyXG5cclxuLy8gICAgICAgICAgICAgaWYgKGZpbGUucGFuID09PSBcInJhbmRvbVwiKSBmaWxlLnNvdW5kLnN0ZXJlbyhyYW5kb20oLTEsIDEpKTtcclxuLy8gICAgICAgICAgICAgZmlsZS5zb3VuZC5wbGF5KCk7XHJcbi8vICAgICAgICAgICB9LCBmaWxlLnJhbmRvbSAqIDEwMDApO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSBhcyBhbnkpO1xyXG5cclxuLy8gICAgIGZpbGUuc291bmQgPSBzb3VuZDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGxldCBydW5uaW5nID0gZmFsc2U7XHJcbi8vICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGlmIChydW5uaW5nKSB7XHJcbi8vICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xyXG5cclxuLy8gICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcclxuLy8gICAgICAgICAgIGZpbGUuc291bmQuc3RvcCgpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBydW5uaW5nID0gdHJ1ZTtcclxuXHJcbi8vICAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbi8vICAgICAgICAgICBpZiAoIWZpbGUucmFuZG9tKSBmaWxlLnNvdW5kLnBsYXkoKTtcclxuLy8gICAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICAgIGlmICghcnVubmluZykgcmV0dXJuO1xyXG5cclxuLy8gICAgICAgICAgICAgICBpZiAoZmlsZS5wYW4gPT09IFwicmFuZG9tXCIpIGZpbGUuc291bmQuc3RlcmVvKHJhbmRvbSgtMSwgMSkpO1xyXG4vLyAgICAgICAgICAgICAgIGZpbGUuc291bmQucGxheSgpO1xyXG4vLyAgICAgICAgICAgICB9LCBmaWxlLnJhbmRvbSAqIDEwMDApO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgICBhbGVydChlKTtcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmFkaW9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgaWYgKHJ1bm5pbmcpIHtcclxuLy8gICAgICAgICBydW5uaW5nID0gZmFsc2U7XHJcblxyXG4vLyAgICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4vLyAgICAgICAgICAgZmlsZS5zb3VuZC5zdG9wKCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xyXG5cclxuLy8gICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcclxuLy8gICAgICAgICAgIGlmICghZmlsZS5yYW5kb20pIGZpbGUuc291bmQucGxheSgpO1xyXG4vLyAgICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgICAgaWYgKCFydW5uaW5nKSByZXR1cm47XHJcblxyXG4vLyAgICAgICAgICAgICAgIGlmIChmaWxlLnBhbiA9PT0gXCJyYW5kb21cIikgZmlsZS5zb3VuZC5zdGVyZW8ocmFuZG9tKC0xLCAxKSk7XHJcbi8vICAgICAgICAgICAgICAgZmlsZS5zb3VuZC5wbGF5KCk7XHJcbi8vICAgICAgICAgICAgIH0sIGZpbGUucmFuZG9tICogMTAwMCk7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICAgIGFsZXJ0KGUpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG5kb2N1bWVudFJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIGluaXQoXCIubWFpblwiLCBjYXRlZ29yaWVzKTtcclxuICAvLyBub2lzZXMoXCIuZm9yZXN0XCIsIFwiLmJhY2tncm91bmRcIiwgZm9yZXN0KTtcclxufSk7XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgQm9vbWJveCB7XHJcbiAgYmFja2dyb3VuZDogQmFja2dyb3VuZFNvdW5kO1xyXG4gIGVmZmVjdDogRWZmZWN0U291cmNlO1xyXG4gIHNvdXJjZXM6IENhdGVnb3JpZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZSB7XHJcbiAgc3RhdGU6IFwicGxheVwiIHwgXCJzdG9wXCI7XHJcbiAgdm9sdW1lOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0U291cmNlIHtcclxuICBzb3VyY2U6IEVmZmVjdFNvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRTb3VyY2Uge1xyXG4gIHNvdXJjZTogQmFja2dyb3VuZFNvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3JpZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRoaW5nczogVGhpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGluZyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtb2ppOiBzdHJpbmc7XHJcbiAgc291bmRzOiBCYWNrZ3JvdW5kU291bmQgfCBFZmZlY3RTb3VuZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3VuZCB7XHJcbiAgdGhpbmc6IFRoaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmaWxlczogRmlsZTtcclxuICBzZWxlY3RlZDogdHJ1ZTtcclxuICBzdGF0ZTogXCJwbGF5XCIgfCBcInN0b3BcIjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kU291bmQgZXh0ZW5kcyBTb3VuZCB7XHJcbiAgdHlwZTogXCJiYWNrZ3JvdW5kXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0U291bmQgZXh0ZW5kcyBTb3VuZCB7XHJcbiAgdHlwZTogXCJlZmZlY3RcIjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWxlIHtcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgdm9sdW1lPzogbnVtYmVyO1xyXG4gIHBhbj86IFwicmFuZG9tXCIgfCBudW1iZXI7XHJcbiAgcmFuZG9tPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRoaW5nU291cmNlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1vamk6IHN0cmluZztcclxuICBzb3VuZHM6IFNvdW5kU291cmNlW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU291bmRTb3VyY2Uge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmaWxlczogRmlsZVtdO1xyXG4gIHR5cGU6IFwiYmFja2dyb3VuZFwiIHwgXCJlZmZlY3RcIjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yaWVTb3VyY2Uge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0aGluZ3M6IFRoaW5nU291cmNlW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3Jlc3Q6IFRoaW5nU291cmNlID0ge1xyXG4gIG5hbWU6IFwiV2FsZFwiLFxyXG4gIGVtb2ppOiBcImRlY2lkdW91c190cmVlXCIsXHJcbiAgc291bmRzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTm9ybWFsXCIsXHJcbiAgICAgIGZpbGVzOiBbeyBwYXRoOiBcImZvcmVzdC9kaXN0YW50LWZvcmVzdC1hbWJpZW5jZS5tcDNcIiB9XSxcclxuICAgICAgdHlwZTogXCJiYWNrZ3JvdW5kXCJcclxuICAgIH1cclxuICBdXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzOiBDYXRlZ29yaWVTb3VyY2VbXSA9IFtcclxuICB7IG5hbWU6IFwiT3J0XCIsIHRoaW5nczogW2ZvcmVzdF0gfVxyXG4gIHsgbmFtZTogXCJUaWVyXCIsIHRoaW5nczogW10gfVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoc2VsZWN0b3I6IHN0cmluZywgY2F0ZWdvcmllczogQ2F0ZWdvcmllU291cmNlW10pIHtcclxuICBjb25zdCAkbWFpbiA9ICQoc2VsZWN0b3IpO1xyXG4gIGNvbnN0ICRtZW51ID0gJChgPGRpdiBjbGFzcz1cInVpIHBvaW50aW5nIHNlY29uZGFyeSBtZW51XCI+PC9kaXY+YCkuYXBwZW5kVG8oXHJcbiAgICAkbWFpblxyXG4gICk7XHJcbiAgZm9yIChjb25zdCBjIG9mIGNhdGVnb3JpZXMpIHtcclxuICAgICQoYDxhIGNsYXNzPVwiaXRlbVwiIGRhdGEtdGFiPVwiJHtjLm5hbWV9XCI+JHtjLm5hbWV9PC9hPmApLmFwcGVuZFRvKCRtZW51KTtcclxuICAgIGNvbnN0ICRjb250ZW50ID0gJChcclxuICAgICAgYDxkaXYgY2xhc3M9XCJ1aSB0YWJcIiBkYXRhLXRhYj1cIiR7Yy5uYW1lfVwiPjwvZGl2PmBcclxuICAgICkuaW5zZXJ0QWZ0ZXIoJG1lbnUpO1xyXG5cclxuICAgIGNvbnN0ICR0aGluZ3NNZW51ID0gJChcclxuICAgICAgYDxkaXYgY2xhc3M9XCJ1aSBwb2ludGluZyBsYWJlbGVkIGljb24gbWVudVwiPjwvZGl2PmBcclxuICAgICkuYXBwZW5kVG8oJGNvbnRlbnQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdCBvZiBjLnRoaW5ncykge1xyXG4gICAgICAkKGBcclxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIiBkYXRhLXRhYj1cIiR7Yy5uYW1lfS0ke3QubmFtZX1cIj5cclxuICAgICAgICAgIDxlbSBkYXRhLWVtb2ppPVwiOiR7dC5lbW9qaX06XCI+PC9lbT5cclxuICAgICAgICAgICR7dC5uYW1lfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICBgKS5hcHBlbmRUbygkdGhpbmdzTWVudSk7XHJcbiAgICAgIGNvbnN0ICR0aGluZ3NDb250ZW50ID0gJChgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIHRhYlwiIGRhdGEtdGFiPVwiJHtjLm5hbWV9LSR7dC5uYW1lfVwiPjwvZGl2PlxyXG4gICAgICAgIGApLmFwcGVuZFRvKCRjb250ZW50KTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgcyBvZiB0LnNvdW5kcykge1xyXG4gICAgICAgICQoYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBiYXNpYyBidXR0b25cIj5cclxuICAgICAgICAgICAgPGVtIGRhdGEtZW1vamk9XCI6JHt0LmVtb2ppfTpcIiBjbGFzcz1cIm1lZGl1bVwiPjwvZW0+PGJyIC8+XHJcbiAgICAgICAgICAgICR7cy5uYW1lfVxyXG4gICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgIHMudHlwZSA9PT0gXCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInVpIHJpZ2h0IGNvcm5lciBsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJzeW5jIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5gXHJcbiAgICAgICAgICAgICAgICA6IGBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJoaWRkZW4gYm90dG9tIGZsb2F0aW5nIHVpIHJlZCBsYWJlbFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwic3RvcCBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiaGlkZGVuIGJvdHRvbSBmbG9hdGluZyB1aSB0ZWFsIGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwbGF5IGljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApLmFwcGVuZFRvKCR0aGluZ3NDb250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJChcIi5tZW51IC5pdGVtXCIpLnRhYigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=