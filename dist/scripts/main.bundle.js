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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("// deprecated\nfunction downBtnScrollDown() {\n    let contentContainer = document.querySelector('#contentContainer')\n    let card = document.querySelector('.card')\n\n    contentContainer.scrollTop += card.offsetHeight\n}\n\n\n\n\nfunction toggleScrollMsg() {\n    let downBtn = document.querySelector('#downBtn')\n    let scrollMsg = document.querySelector('#scrollMsg')\n    // if (window.getComputedStyle(scrollMsg).pointerEvents == 'none') {\n    downBtn.style.pointerEvents = 'none'\n    scrollMsg.style.opacity = '1'\n    // scrollMsg.style.pointerEvents = 'auto'\n    // }\n    document.querySelector('#contentContainer').addEventListener('scroll', function () {\n        scrollMsg.style.opacity = '0'\n    })\n}\nwindow.toggleScrollMsg = toggleScrollMsg\n\n\n\n\nfunction toggleHelpModal() {\n    let helpModal = document.querySelector('#helpModal')\n    if (window.getComputedStyle(helpModal).pointerEvents == 'none') {\n        helpModal.style.opacity = '1'\n        helpModal.style.pointerEvents = 'auto'\n    } else {\n        helpModal.style.opacity = '0'\n        helpModal.style.pointerEvents = 'none'\n    }\n}\nwindow.toggleHelpModal = toggleHelpModal\n\n\n\n\nfunction copyToClipboard(text, classOrder) {\n\n    navigator.clipboard.writeText(text)\n\n    let targetElement = document.getElementsByClassName('footerDetail')[classOrder]\n    let initialText = targetElement.innerText\n\n    if (initialText != 'Copied to Clipboard!') {\n\n        targetElement.style.opacity = 0\n        setTimeout(() => { targetElement.style.opacity = 1 }, 200)\n\n        setTimeout(() => { targetElement.innerText = 'Copied to Clipboard!' }, 200)\n\n\n        setTimeout(() => {\n            targetElement.style.opacity = 0\n            setTimeout(() => { targetElement.style.opacity = 1 }, 200)\n            setTimeout(() => { targetElement.innerText = initialText }, 200)\n            setTimeout(() => { targetElement.parentElement.style.pointerEvents = 'none' }, 200)\n            setTimeout(() => { targetElement.parentElement.style.pointerEvents = 'auto' }, 500)\n        }, 2000)\n    }\n}\nwindow.copyToClipboard = copyToClipboard\n\n\n\n\nfunction revealContentContainer() {\n    document.querySelector('#contentContainer').style.opacity = '1'\n}\ndocument.querySelector('#contentContainer').addEventListener('load', revealContentContainer())\n\n\n//# sourceURL=webpack://personal-website/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;