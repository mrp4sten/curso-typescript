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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\n\nconst pedido = [];\n\nconst MAX_PEDIDO = 3;\nconst carrito = document.getElementById(\"carrito\");\nlet sushi_items = document.getElementsByClassName(\"sushi_item\");\n\nfunction nuevoElm (elm) {\n    util.log(\"[NUEVO] \" + elm)\n    if (pedido.length < MAX_PEDIDO) {\n        carrito.innerHTML = carrito.innerHTML + \"<span>\" + elm.currentTarget.innerHTML + \"</span>\"\n        pedido.push(elm.currentTarget);\n        util.log(\"[NUEVO] \" + elm.currentTarget)\n    } else {\n        util.log(\"[CARRRITO] Carrito lleno\")\n    }\n}\n\nfunction borrarElm (ind) {\n    pedido.splice(ind, 1);\n    util.log(\"[BORRADO] \" + ind)\n}\n\nfor (var i = 0; i < sushi_items.length; i++) {\n    sushi_items[i].addEventListener('click', nuevoElm, false);\n}\n\n\n//# sourceURL=webpack://curso-typescript/./src/app.js?");

/***/ }),

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\n\nfunction registerProfile(email) {\n  util.log(`[REGISTER] ${email}`)\n}\n\nregisterProfile('mau@test.com')\n\n//# sourceURL=webpack://curso-typescript/./src/register.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = {\n  log: (texto) => {\n    console.log(texto);\n  }\n}\n\n//# sourceURL=webpack://curso-typescript/./src/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/register.js");
/******/ 	
/******/ })()
;