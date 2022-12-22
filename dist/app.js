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
/***/ (() => {

eval("const pedido=[];\r\n\r\nfunction log(texto){\r\n    console.log(texto);\r\n}\r\n\r\nfunction nuevoElm(elm){\r\n    pedido.push(elm);\r\n    log(\"[-NUEVO-] \"+elm)\r\n}\r\n\r\nfunction borrarElm(ind){\r\n    pedido.splice(ind,1);\r\n    log(\"[BORRADO] \"+ind)\r\n}\r\n\r\nnuevoElm(\"Nigiri salmon\");\n\n//# sourceURL=webpack://sushi4all/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;