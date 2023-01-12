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
//Calculo del IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
let imc = calcularIMC(peso, altura);
console.log("El calculo del IMC: " + imc);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Blc29pZGVhbC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy9EZWZpbmljaW9uIGRlIGxhcyB2YXJpYWJsZXNcclxubGV0IG5vbWJyZSA9IFwiUGFjb1wiO1xyXG5sZXQgZWRhZCA9IDQwO1xyXG5sZXQgcGVzbyA9IDgwO1xyXG5sZXQgYWx0dXJhID0gMTc1O1xyXG5sZXQgc2V4byA9IHRydWU7XHJcbi8vQ2FsY3VsbyBkZWwgSU1DXHJcbmZ1bmN0aW9uIGNhbGN1bGFySU1DKHBlc28sIGFsdHVyYSkge1xyXG4gICAgcmV0dXJuIHBlc28gLyAoYWx0dXJhICogYWx0dXJhKTtcclxufVxyXG5sZXQgaW1jID0gY2FsY3VsYXJJTUMocGVzbywgYWx0dXJhKTtcclxuY29uc29sZS5sb2coXCJFbCBjYWxjdWxvIGRlbCBJTUM6IFwiICsgaW1jKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9