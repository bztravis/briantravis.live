/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bezier-easing/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/**\n * https://github.com/gre/bezier-easing\n * BezierEasing - use bezier curve for transition easing function\n * by Gaëtan Renaudeau 2014 - 2015 – MIT License\n */\n\n// These values are established by empiricism with tests (tradeoff: performance VS precision)\nvar NEWTON_ITERATIONS = 4;\nvar NEWTON_MIN_SLOPE = 0.001;\nvar SUBDIVISION_PRECISION = 0.0000001;\nvar SUBDIVISION_MAX_ITERATIONS = 10;\n\nvar kSplineTableSize = 11;\nvar kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);\n\nvar float32ArraySupported = typeof Float32Array === 'function';\n\nfunction A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }\nfunction B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }\nfunction C (aA1)      { return 3.0 * aA1; }\n\n// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.\nfunction calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }\n\n// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.\nfunction getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }\n\nfunction binarySubdivide (aX, aA, aB, mX1, mX2) {\n  var currentX, currentT, i = 0;\n  do {\n    currentT = aA + (aB - aA) / 2.0;\n    currentX = calcBezier(currentT, mX1, mX2) - aX;\n    if (currentX > 0.0) {\n      aB = currentT;\n    } else {\n      aA = currentT;\n    }\n  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);\n  return currentT;\n}\n\nfunction newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {\n for (var i = 0; i < NEWTON_ITERATIONS; ++i) {\n   var currentSlope = getSlope(aGuessT, mX1, mX2);\n   if (currentSlope === 0.0) {\n     return aGuessT;\n   }\n   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;\n   aGuessT -= currentX / currentSlope;\n }\n return aGuessT;\n}\n\nfunction LinearEasing (x) {\n  return x;\n}\n\nmodule.exports = function bezier (mX1, mY1, mX2, mY2) {\n  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {\n    throw new Error('bezier x values must be in [0, 1] range');\n  }\n\n  if (mX1 === mY1 && mX2 === mY2) {\n    return LinearEasing;\n  }\n\n  // Precompute samples table\n  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);\n  for (var i = 0; i < kSplineTableSize; ++i) {\n    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);\n  }\n\n  function getTForX (aX) {\n    var intervalStart = 0.0;\n    var currentSample = 1;\n    var lastSample = kSplineTableSize - 1;\n\n    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {\n      intervalStart += kSampleStepSize;\n    }\n    --currentSample;\n\n    // Interpolate to provide an initial guess for t\n    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);\n    var guessForT = intervalStart + dist * kSampleStepSize;\n\n    var initialSlope = getSlope(guessForT, mX1, mX2);\n    if (initialSlope >= NEWTON_MIN_SLOPE) {\n      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);\n    } else if (initialSlope === 0.0) {\n      return guessForT;\n    } else {\n      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);\n    }\n  }\n\n  return function BezierEasing (x) {\n    // Because JavaScript number are imprecise, we should guarantee the extremes are right.\n    if (x === 0) {\n      return 0;\n    }\n    if (x === 1) {\n      return 1;\n    }\n    return calcBezier(getTForX(x), mY1, mY2);\n  };\n};\n\n\n//# sourceURL=webpack://personal-website/./node_modules/bezier-easing/src/index.js?");

/***/ }),

/***/ "./src/scrollPeek.js":
/*!***************************!*\
  !*** ./src/scrollPeek.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bezier-easing */ \"./node_modules/bezier-easing/src/index.js\");\n/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst staleSession = sessionStorage.getItem(\"present\");\nif (!staleSession) {\n  sessionStorage.setItem(\"present\", true)\n  setTimeout(() => { window.requestAnimationFrame(step); }, 1000)\n  setTimeout(() => { element.style.scrollSnapType = 'y mandatory' }, 3400)\n}\n\nconst easeIn = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.2, 0, 0.4, 1)\nconst fallingEase = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(.41, .01, .63, .25)\nconst bounceEase = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(.37, .97, .87, 1)\n\n\nconst element = document.getElementById(\"contentContainer\");\nlet start, previousTimeStamp;\n\nfunction step(timeStamp) {\n  if (start === undefined) {\n    start = timeStamp;\n  }\n  const elapsed = timeStamp - start;\n\n  if (previousTimeStamp !== timeStamp) {\n    if (elapsed < 1500) {\n      const count = easeIn(elapsed / 1500) * 100\n      // console.log(count)\n      element.style.scrollSnapType = 'none';\n      element.scrollTop = count;\n    }\n    else if (elapsed < 1700) {\n      const count = fallingEase((1700 - elapsed) / 200) * 100\n      // console.log('first', count)\n      element.style.scrollSnapType = 'none';\n      element.scrollTop = count;\n    }\n    else if (elapsed < 2000) {\n      const count = bounceEase((elapsed - 1700) / 300) * 20\n      // console.log('second', count)\n      element.style.scrollSnapType = 'none';\n      element.scrollTop = count;\n    }\n    else if (elapsed < 2300) {\n      const count = bounceEase((2300 - elapsed) / 300) * 20\n      // console.log('third', count)\n      element.style.scrollSnapType = 'none';\n      element.scrollTop = count;\n    }\n  }\n\n  if (elapsed < 2300) {\n    // Stop the animation after 2 seconds\n    previousTimeStamp = timeStamp;\n    window.requestAnimationFrame(step);\n  }\n}\n\n\n\n\n\n//# sourceURL=webpack://personal-website/./src/scrollPeek.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scrollPeek.js");
/******/ 	
/******/ })()
;