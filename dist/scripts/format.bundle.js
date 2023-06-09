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

/***/ "./src/format.js":
/*!***********************!*\
  !*** ./src/format.js ***!
  \***********************/
/***/ (() => {

eval("function format() {\n\n    let contentContainerWidth = window.innerWidth - (3 * 56) - 260\n    let contentContainerHeight = window.innerHeight - (2 * 56)\n    let cardHeight = (contentContainerHeight / 2) - 4\n    let cardWidth = (cardHeight / 3 * 2) + 1    // 1px for error\n    let cardWidthExact = (cardHeight / 3 * 2)\n    let cardCount = Math.floor(contentContainerWidth / (cardWidth + 8))\n    let flexContainerWidth = cardCount * (cardWidth + 8) + 1    // 1px for error\n\n    document.documentElement.style.setProperty('--flexContainerWidth', flexContainerWidth + 'px')\n    document.documentElement.style.setProperty('--cardCount', cardCount)\n    document.documentElement.style.setProperty('--cardWidthExact', cardWidthExact + 'px')\n\n\n\n\n    let vh = window.innerHeight * 0.01\n    document.documentElement.style.setProperty('--vh', `${vh}px`)\n\n\n\n\n    // HOME\n    if (document.getElementsByTagName('title')[0].innerText == 'Brian Travis Photography') {\n        const contentContainer = document.querySelector(\"#contentContainer\")\n        const staleSession = sessionStorage.getItem(\"present\");\n        if (staleSession) {\n            setTimeout(() => {\n                checkToggleDownBtn()\n            }, 500);\n        }\n        else {\n            contentContainer.style.overflow = 'hidden'\n            setTimeout(() => {\n                contentContainer.style.overflow = 'scroll'\n                checkToggleDownBtn()\n            }, 3500);\n        }\n    }\n\n    // PRICING\n    if (document.getElementsByTagName('title')[0].innerText == 'Pricing - Brian Travis Photography') {\n\n        // width breakpoint for pricingCards\n        let flexContainer = document.querySelector('.flexContainer')\n        let pricingCard = document.querySelectorAll('.pricingCard')\n\n        let width = window.innerWidth;\n        let height = window.innerHeight;\n        let isMobile = (height < 500) || (width < 850) || (height > 700 && (width / height < 850 / 700))\n        if (!isMobile) {\n            if ((flexContainerWidth / ((200 + 8))) < 3) {\n                flexContainer.style.flexDirection = 'column'\n                pricingCard.forEach((individualCard) => { individualCard.style.maxWidth = 'none' })\n            } else {\n                flexContainer.style.flexDirection = 'row'\n                pricingCard.forEach((individualCard) => { individualCard.style.maxWidth = '400px' })\n            }\n        } else {\n            if ((flexContainer.offsetWidth / ((200 + 8))) < 3) {\n                flexContainer.style.flexDirection = 'column'\n                pricingCard.forEach((individualCard) => { individualCard.style.maxWidth = 'none' })\n            } else {\n                flexContainer.style.flexDirection = 'row'\n                pricingCard.forEach((individualCard) => { individualCard.style.maxWidth = '400px' })\n            }\n        }\n\n\n        // fancy centering of pricing detail ul\n        document.documentElement.style.setProperty('--pricingItemListMargin', 0 + 'px')    // must do this first so the p can expand before evaluation of its length\n\n        let longestItemListText = document.querySelector('#longestItemListText')\n        let pricingCardIndividual = document.querySelector('.pricingCard')\n\n        let pricingCardIndividualWidth = pricingCardIndividual.offsetWidth\n        let longestItemListTextWidth = longestItemListText.offsetWidth\n        let pricingItemListMargin = (pricingCardIndividualWidth - (longestItemListTextWidth + 32)) / 2 + 32\n        console.log(pricingCardIndividualWidth);\n        console.log(longestItemListTextWidth);\n        console.log(pricingItemListMargin);\n\n        document.documentElement.style.setProperty('--pricingItemListMargin', pricingItemListMargin + 'px')\n\n    }\n}\n\nformat()\ndocument.body.onresize = () => { format() }\ndocument.body.onorientationchange = () => { format() }\n\n\n\n\ndocument.querySelector('#contentContainer').scrollTop = 0\n\nfunction checkToggleDownBtn() {\n    let downBtn = document.querySelector('#downBtn')\n    let scrollMsg = document.querySelector('#scrollMsg')\n    let flexContainer = document.querySelector('.flexContainer')\n    let contentContainer = document.querySelector('#contentContainer')\n    let card = document.querySelector('.card')\n    if ((flexContainer.offsetHeight - contentContainer.offsetHeight) - contentContainer.scrollTop <= card.offsetHeight) {\n        downBtn.style.opacity = '0'\n        // downBtn.style.pointerEvents = 'none'\n        scrollMsg.style.opacity = '0'\n        // scrollMsg.style.pointerEvents = 'none'\n    } else {\n        downBtn.style.opacity = '1'\n        // downBtn.style.pointerEvents = 'auto'\n    }\n}\nwindow.checkToggleDownBtn = checkToggleDownBtn\n\n\n//# sourceURL=webpack://personal-website/./src/format.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/format.js"]();
/******/ 	
/******/ })()
;