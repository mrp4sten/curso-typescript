/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************!*\
  !*** ./src/appTMB.ts ***!
  \***********************/

//Calculo de las calorias optimas
//Definicion de las variables
let nombre;
//Captura de inf a partir del formulario
const sexoSelect = document.getElementById("sexo");
const actividadSelect = document.getElementById("actividad");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const edadInput = document.getElementById("edad");
const KcalOpt = document.getElementById("KcalOpt");
const botonCalculo = document.getElementById("botonCalculo");
function calcularTMB(peso, altura, edad, sexo) {
    if (sexo == 1) {
        return ((10 * peso) + (6.25 * altura) - (5 * edad) - 161);
    }
    else {
        return ((10 * peso) + (6.25 * altura) - (5 * edad) + 5);
    }
}
function calcularKcal(actividad, tmb) {
    if (actividad == 1)
        return (tmb * 1.375) / 1000;
    else if (actividad == 2)
        return (tmb * 1.55) / 1000;
    else
        return (tmb * 1.725) / 1000;
}
//Transformacion de datos de formulario
function transformar(elemento) {
    let valor;
    valor = parseFloat(elemento.value);
    if (isNaN(valor))
        valor = 0;
    return valor;
}
function transformarSelect(elemento) {
    let valor;
    valor = parseFloat(elemento.options[sexoSelect.selectedIndex].value);
    if (isNaN(valor))
        valor = 0;
    return valor;
}
//Recogida de datos
function recogidaDatos(event) {
    let peso;
    let altura;
    let edad;
    let sexo;
    let actividad;
    let tmb;
    let kcalmin;
    event === null || event === void 0 ? void 0 : event.preventDefault();
    peso = transformar(pesoInput);
    altura = transformar(alturaInput);
    edad = transformar(edadInput);
    sexo = transformarSelect(sexoSelect);
    actividad = transformarSelect(actividadSelect);
    console.log(peso);
    console.log(altura);
    console.log(edad);
    console.log(sexo);
    console.log(actividad);
    tmb = calcularTMB(peso, altura, edad, sexo);
    kcalmin = calcularKcal(actividad, tmb);
    console.log(tmb);
    console.log(kcalmin);
    KcalOpt.value = kcalmin.toString();
}
//Evento de calculo formulario navegacion
botonCalculo.addEventListener("click", recogidaDatos);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var exports = __webpack_exports__;
/*!************************!*\
  !*** ./src/appMenu.ts ***!
  \************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
console.log("Bienvenido a WonderFood");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0RWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL2FwcFRNQi50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL2FwcE1lbnUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vQ2FsY3VsbyBkZSBsYXMgY2Fsb3JpYXMgb3B0aW1hc1xyXG4vL0RlZmluaWNpb24gZGUgbGFzIHZhcmlhYmxlc1xyXG5sZXQgbm9tYnJlO1xyXG4vL0NhcHR1cmEgZGUgaW5mIGEgcGFydGlyIGRlbCBmb3JtdWxhcmlvXHJcbmNvbnN0IHNleG9TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNleG9cIik7XHJcbmNvbnN0IGFjdGl2aWRhZFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpZGFkXCIpO1xyXG5jb25zdCBwZXNvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlc29cIik7XHJcbmNvbnN0IGFsdHVyYUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHR1cmFcIik7XHJcbmNvbnN0IGVkYWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRhZFwiKTtcclxuY29uc3QgS2NhbE9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiS2NhbE9wdFwiKTtcclxuY29uc3QgYm90b25DYWxjdWxvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3RvbkNhbGN1bG9cIik7XHJcbmZ1bmN0aW9uIGNhbGN1bGFyVE1CKHBlc28sIGFsdHVyYSwgZWRhZCwgc2V4bykge1xyXG4gICAgaWYgKHNleG8gPT0gMSkge1xyXG4gICAgICAgIHJldHVybiAoKDEwICogcGVzbykgKyAoNi4yNSAqIGFsdHVyYSkgLSAoNSAqIGVkYWQpIC0gMTYxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoKDEwICogcGVzbykgKyAoNi4yNSAqIGFsdHVyYSkgLSAoNSAqIGVkYWQpICsgNSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2FsY3VsYXJLY2FsKGFjdGl2aWRhZCwgdG1iKSB7XHJcbiAgICBpZiAoYWN0aXZpZGFkID09IDEpXHJcbiAgICAgICAgcmV0dXJuICh0bWIgKiAxLjM3NSkgLyAxMDAwO1xyXG4gICAgZWxzZSBpZiAoYWN0aXZpZGFkID09IDIpXHJcbiAgICAgICAgcmV0dXJuICh0bWIgKiAxLjU1KSAvIDEwMDA7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuICh0bWIgKiAxLjcyNSkgLyAxMDAwO1xyXG59XHJcbi8vVHJhbnNmb3JtYWNpb24gZGUgZGF0b3MgZGUgZm9ybXVsYXJpb1xyXG5mdW5jdGlvbiB0cmFuc2Zvcm1hcihlbGVtZW50bykge1xyXG4gICAgbGV0IHZhbG9yO1xyXG4gICAgdmFsb3IgPSBwYXJzZUZsb2F0KGVsZW1lbnRvLnZhbHVlKTtcclxuICAgIGlmIChpc05hTih2YWxvcikpXHJcbiAgICAgICAgdmFsb3IgPSAwO1xyXG4gICAgcmV0dXJuIHZhbG9yO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zZm9ybWFyU2VsZWN0KGVsZW1lbnRvKSB7XHJcbiAgICBsZXQgdmFsb3I7XHJcbiAgICB2YWxvciA9IHBhcnNlRmxvYXQoZWxlbWVudG8ub3B0aW9uc1tzZXhvU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlKTtcclxuICAgIGlmIChpc05hTih2YWxvcikpXHJcbiAgICAgICAgdmFsb3IgPSAwO1xyXG4gICAgcmV0dXJuIHZhbG9yO1xyXG59XHJcbi8vUmVjb2dpZGEgZGUgZGF0b3NcclxuZnVuY3Rpb24gcmVjb2dpZGFEYXRvcyhldmVudCkge1xyXG4gICAgbGV0IHBlc287XHJcbiAgICBsZXQgYWx0dXJhO1xyXG4gICAgbGV0IGVkYWQ7XHJcbiAgICBsZXQgc2V4bztcclxuICAgIGxldCBhY3RpdmlkYWQ7XHJcbiAgICBsZXQgdG1iO1xyXG4gICAgbGV0IGtjYWxtaW47XHJcbiAgICBldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBlc28gPSB0cmFuc2Zvcm1hcihwZXNvSW5wdXQpO1xyXG4gICAgYWx0dXJhID0gdHJhbnNmb3JtYXIoYWx0dXJhSW5wdXQpO1xyXG4gICAgZWRhZCA9IHRyYW5zZm9ybWFyKGVkYWRJbnB1dCk7XHJcbiAgICBzZXhvID0gdHJhbnNmb3JtYXJTZWxlY3Qoc2V4b1NlbGVjdCk7XHJcbiAgICBhY3RpdmlkYWQgPSB0cmFuc2Zvcm1hclNlbGVjdChhY3RpdmlkYWRTZWxlY3QpO1xyXG4gICAgY29uc29sZS5sb2cocGVzbyk7XHJcbiAgICBjb25zb2xlLmxvZyhhbHR1cmEpO1xyXG4gICAgY29uc29sZS5sb2coZWRhZCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZXhvKTtcclxuICAgIGNvbnNvbGUubG9nKGFjdGl2aWRhZCk7XHJcbiAgICB0bWIgPSBjYWxjdWxhclRNQihwZXNvLCBhbHR1cmEsIGVkYWQsIHNleG8pO1xyXG4gICAga2NhbG1pbiA9IGNhbGN1bGFyS2NhbChhY3RpdmlkYWQsIHRtYik7XHJcbiAgICBjb25zb2xlLmxvZyh0bWIpO1xyXG4gICAgY29uc29sZS5sb2coa2NhbG1pbik7XHJcbiAgICBLY2FsT3B0LnZhbHVlID0ga2NhbG1pbi50b1N0cmluZygpO1xyXG59XHJcbi8vRXZlbnRvIGRlIGNhbGN1bG8gZm9ybXVsYXJpbyBuYXZlZ2FjaW9uXHJcbmJvdG9uQ2FsY3Vsby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVjb2dpZGFEYXRvcyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnNvbGUubG9nKFwiQmllbnZlbmlkbyBhIFdvbmRlckZvb2RcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==