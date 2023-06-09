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

/***/ "./src/placePhotos.js":
/*!****************************!*\
  !*** ./src/placePhotos.js ***!
  \****************************/
/***/ (() => {

eval("const photoConfig = [\n    [0, 10],    // Summer Wu\n    [100, 101],   // Andy Travis\n    [500, 501],  // Andy Travis (2)\n    [400, 401], // Ben Gates\n    [200, 206],   // Jessica Davids\n    [300, 318],  // Aiden Engvall\n    [600, 605], // Sahil Sawant\n\n]\n\nconst exclude = [\n    7, 8, 10,   // Summer Wu\n    501,    // Andy Travis\n    200, 201, 204, 206, // Jessica Davids\n    300, 301, 302, 303, 304, 306, 310, 311, 312, 315, 316, 317, 318,    // Aiden Engvall\n]\n\n\nlet realExclusionOrder = []\n\n\nfunction placePhotos() {\n\n    let currentCard = 0\n\n    for (let subject = photoConfig.length - 1; subject >= 0; subject--) {\n\n        // console.log(`subject${subject}`);\n\n        let range = []\n        for (let i = photoConfig[subject][0]; i <= photoConfig[subject][1]; i++) {\n            range.push(i)\n        }\n        // console.log(range)\n\n\n        while (range.length > 0) {\n            // console.log(range.length);\n            let randomPhotoIndex = Math.floor(Math.random() * range.length)\n            let photoName = range[randomPhotoIndex]\n\n            let flexContainer = document.getElementsByClassName('flexContainer')[0]\n            let newCard = document.createElement('div')\n            let newCardImage = document.createElement('img')\n            newCard.appendChild(newCardImage)\n            newCardImage.classList.add('cardImage')\n            newCard.classList.add('card')\n            flexContainer.appendChild(newCard)\n\n            let photoCards = document.getElementsByClassName('card')\n            photoCards[currentCard].style.backgroundImage = `url('./images/small/${photoName}.png')`\n\n            let photoCardImages = document.getElementsByClassName('cardImage')\n            photoCardImages[currentCard].setAttribute('src', `./images/portfolio/${photoName}.png`)\n            photoCardImages[currentCard].setAttribute('loading', 'lazy')\n            photoCardImages[currentCard].classList.add('cardImage')\n            photoCardImages[currentCard].addEventListener('load', (e) => {\n                e.target.classList.add('loaded')\n            })\n            // if (photoCardImages[currentCard].complete)\n            //     photoCardImages[currentCard].classList.add('loaded')\n\n            if (exclude.includes(photoName)) {\n                realExclusionOrder.push(currentCard)\n            }\n\n            currentCard++\n            range.splice(randomPhotoIndex, 1)   // remove element at index\n        }\n    }\n\n\n    // remove cards with excluded images\n    for (let exclusion = exclude.length - 1; exclusion >= 0; exclusion--) {\n        let photoCards = document.getElementsByClassName('card')\n        photoCards[realExclusionOrder[exclusion]].remove()\n    }\n}\n\nplacePhotos()\n\n\n//# sourceURL=webpack://personal-website/./src/placePhotos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/placePhotos.js"]();
/******/ 	
/******/ })()
;