/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//Definicion de las variables
let nombre = "Paco";
let edad = 40;
let peso = 80;
let altura = 175;
let sexo = true;
//Definir los objetos desde el form
const pesoInput = document.getElementById("peso");
//Calculo del IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
let imc = calcularIMC(peso, altura);
console.log("El calculo del IMC: " + imc);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNvaWRlYWwvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vRGVmaW5pY2lvbiBkZSBsYXMgdmFyaWFibGVzXHJcbmxldCBub21icmUgPSBcIlBhY29cIjtcclxubGV0IGVkYWQgPSA0MDtcclxubGV0IHBlc28gPSA4MDtcclxubGV0IGFsdHVyYSA9IDE3NTtcclxubGV0IHNleG8gPSB0cnVlO1xyXG4vL0RlZmluaXIgbG9zIG9iamV0b3MgZGVzZGUgZWwgZm9ybVxyXG5jb25zdCBwZXNvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlc29cIik7XHJcbi8vQ2FsY3VsbyBkZWwgSU1DXHJcbmZ1bmN0aW9uIGNhbGN1bGFySU1DKHBlc28sIGFsdHVyYSkge1xyXG4gICAgcmV0dXJuIHBlc28gLyAoYWx0dXJhICogYWx0dXJhKTtcclxufVxyXG5sZXQgaW1jID0gY2FsY3VsYXJJTUMocGVzbywgYWx0dXJhKTtcclxuY29uc29sZS5sb2coXCJFbCBjYWxjdWxvIGRlbCBJTUM6IFwiICsgaW1jKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9