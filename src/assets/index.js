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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("// import { mountFileInput, validateForm, linkForms } from './forms/index.js';\n// var lang = document.documentElement.lang;\n// var mainForm = document.querySelector('.form form');\n// var containsHelper = mainForm.getAttribute('data-size') !== 'full';\n// var mq = window.matchMedia('(min-width: 40em)');\n// mq.addListener(handleSizeChange);\n// if (!containsHelper) {\n//   mountFileInput();\n// } else {\n//   linkForms(mainForm);\n//   validateForm(mainForm, lang);\n// }\nvar bodyEl = document.querySelector('body');\nvar menuToggle = document.querySelector('#menu-toggle');\nvar menu = document.querySelector('#menu');\nmenuToggle.addEventListener('click', function (e) {\n  bodyEl.classList.toggle('is-menu-open');\n  var isMenuVisible = menuToggle.getAttribute('aria-expanded') == 'true';\n  var newMenuState = !isMenuVisible;\n  menuToggle.setAttribute('aria-expanded', !isMenuVisible);\n  menu.setAttribute('aria-hidden', isMenuVisible);\n  menuToggle.setAttribute('data-inverted', !isMenuVisible);\n  menuToggle.textContent = isMenuVisible ? 'Menu' : 'Close';\n});\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/styles/base.scss":
/*!******************************!*\
  !*** ./src/styles/base.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/base.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/scripts/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles/base.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;