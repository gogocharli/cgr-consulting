/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/forms/file-input.js":
/*!*****************************************!*\
  !*** ./src/scripts/forms/file-input.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mountFileInput\": () => (/* binding */ mountFileInput)\n/* harmony export */ });\nfunction mountFileInput() {\n  var fileInput = document.querySelector('input[type=\"file\"]');\n  var handleInputChange = updateLabel(fileInput);\n  fileInput.addEventListener('change', handleInputChange);\n}\n\nfunction updateLabel(fileInput) {\n  return function () {\n    var fileLabel = fileInput.previousElementSibling;\n    var fileLabelText = fileLabel.firstElementChild;\n\n    if (fileInput.value) {\n      fileLabelText.textContent = fileInput.value.slice(12).slice(0, 25);\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/scripts/forms/file-input.js?");

/***/ }),

/***/ "./src/scripts/forms/index.js":
/*!************************************!*\
  !*** ./src/scripts/forms/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mountFileInput\": () => (/* reexport safe */ _file_input__WEBPACK_IMPORTED_MODULE_0__.mountFileInput)\n/* harmony export */ });\n/* harmony import */ var _file_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-input */ \"./src/scripts/forms/file-input.js\");\n\n\n//# sourceURL=webpack:///./src/scripts/forms/index.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/index.js */ \"./src/scripts/forms/index.js\");\n\nvar mainForm = document.querySelector('form');\n/** Menu Open and Close */\n\nvar bodyEl = document.querySelector('body');\nvar menuToggle = document.querySelector('#menu-toggle');\nvar menu = document.querySelector('#menu');\nmenuToggle.addEventListener('click', function (e) {\n  bodyEl.classList.toggle('is-modal-open');\n  var isMenuVisible = menuToggle.getAttribute('aria-expanded') == 'true';\n  var newMenuState = !isMenuVisible;\n  menuToggle.setAttribute('aria-expanded', !isMenuVisible);\n  menu.setAttribute('aria-hidden', isMenuVisible);\n  menuToggle.setAttribute('data-inverted', !isMenuVisible);\n  menuToggle.textContent = isMenuVisible ? 'Menu' : 'Close';\n});\nvar menuItems = menu.querySelector('ul');\nmenuItems.addEventListener('click', function (e) {\n  bodyEl.classList.remove('is-modal-open');\n  menuToggle.setAttribute('aria-expanded', false);\n  menu.setAttribute('aria-hidden', true);\n  menuToggle.setAttribute('data-inverted', false);\n  menuToggle.textContent = 'Menu';\n});\n/* Modal Logic */\n\nvar modalEl = document.querySelector('[role=\"dialog\"]');\nvar modalToggle = document.querySelector('#modal-toggle');\nmodalToggle.addEventListener('click', function () {\n  modalToggle.setAttribute('aria-expanded', true);\n  bodyEl.classList.add('is-modal-open');\n  modalEl.classList.add('is-visible');\n  modalEl.querySelector('form input').focus();\n  var closeButton = modalEl.querySelector('#dialog-close');\n  closeButton.addEventListener('click', handleModalClose);\n  (0,_forms_index_js__WEBPACK_IMPORTED_MODULE_0__.mountFileInput)();\n});\n\nfunction handleModalClose(e) {\n  modalToggle.setAttribute('aria-expanded', false);\n  modalEl.classList.remove('is-visible');\n  bodyEl.classList.remove('is-modal-open');\n  e.target.removeEventListener('click', handleModalClose);\n}\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/styles/base.scss":
/*!******************************!*\
  !*** ./src/styles/base.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/base.scss?");

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
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/base.scss");
/******/ 	
/******/ })()
;