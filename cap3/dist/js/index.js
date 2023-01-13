/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//Definicion de las variables
let nombre = "Paco";
let edad = 40;
let sexo = true;
//Captura de inf a partir del formulario
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const edadInput = document.getElementById("edad");
const botonCalculo = document.getElementById("botonCalculo");
function calcularTMB(peso, altura, edad, sexo) {
    return ((10 * peso) + (6.25 * altura) - (5 * edad) - 161);
}
//Transformacion de datos de formulario
function transformar(elemento) {
    let valor;
    valor = parseFloat(elemento.value);
    if (isNaN(valor))
        valor = 0;
    return valor;
}
//Recogida de datos
function recogidaDatos(event) {
    let peso;
    let altura;
    let edad;
    let tmb;
    event === null || event === void 0 ? void 0 : event.preventDefault();
    peso = transformar(pesoInput);
    altura = transformar(alturaInput);
    edad = transformar(edadInput);
    console.log(peso);
    console.log(altura);
    console.log(edad);
    tmb = calcularTMB(peso, altura, edad);
    console.log(tmb);
}
//Evento de calculo
botonCalculo.addEventListener("click", recogidaDatos);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNvaWRlYWwvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vRGVmaW5pY2lvbiBkZSBsYXMgdmFyaWFibGVzXHJcbmxldCBub21icmUgPSBcIlBhY29cIjtcclxubGV0IGVkYWQgPSA0MDtcclxubGV0IHNleG8gPSB0cnVlO1xyXG4vL0NhcHR1cmEgZGUgaW5mIGEgcGFydGlyIGRlbCBmb3JtdWxhcmlvXHJcbmNvbnN0IHBlc29JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVzb1wiKTtcclxuY29uc3QgYWx0dXJhSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdHVyYVwiKTtcclxuY29uc3QgZWRhZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGFkXCIpO1xyXG5jb25zdCBib3RvbkNhbGN1bG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdG9uQ2FsY3Vsb1wiKTtcclxuZnVuY3Rpb24gY2FsY3VsYXJUTUIocGVzbywgYWx0dXJhLCBlZGFkLCBzZXhvKSB7XHJcbiAgICByZXR1cm4gKCgxMCAqIHBlc28pICsgKDYuMjUgKiBhbHR1cmEpIC0gKDUgKiBlZGFkKSAtIDE2MSk7XHJcbn1cclxuLy9UcmFuc2Zvcm1hY2lvbiBkZSBkYXRvcyBkZSBmb3JtdWxhcmlvXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybWFyKGVsZW1lbnRvKSB7XHJcbiAgICBsZXQgdmFsb3I7XHJcbiAgICB2YWxvciA9IHBhcnNlRmxvYXQoZWxlbWVudG8udmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKHZhbG9yKSlcclxuICAgICAgICB2YWxvciA9IDA7XHJcbiAgICByZXR1cm4gdmFsb3I7XHJcbn1cclxuLy9SZWNvZ2lkYSBkZSBkYXRvc1xyXG5mdW5jdGlvbiByZWNvZ2lkYURhdG9zKGV2ZW50KSB7XHJcbiAgICBsZXQgcGVzbztcclxuICAgIGxldCBhbHR1cmE7XHJcbiAgICBsZXQgZWRhZDtcclxuICAgIGxldCB0bWI7XHJcbiAgICBldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBlc28gPSB0cmFuc2Zvcm1hcihwZXNvSW5wdXQpO1xyXG4gICAgYWx0dXJhID0gdHJhbnNmb3JtYXIoYWx0dXJhSW5wdXQpO1xyXG4gICAgZWRhZCA9IHRyYW5zZm9ybWFyKGVkYWRJbnB1dCk7XHJcbiAgICBjb25zb2xlLmxvZyhwZXNvKTtcclxuICAgIGNvbnNvbGUubG9nKGFsdHVyYSk7XHJcbiAgICBjb25zb2xlLmxvZyhlZGFkKTtcclxuICAgIHRtYiA9IGNhbGN1bGFyVE1CKHBlc28sIGFsdHVyYSwgZWRhZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0bWIpO1xyXG59XHJcbi8vRXZlbnRvIGRlIGNhbGN1bG9cclxuYm90b25DYWxjdWxvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWNvZ2lkYURhdG9zKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9