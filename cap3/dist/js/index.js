/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//Definicion de las variables
let nombre;
//Captura de inf a partir del formulario
const sexoSelect = document.getElementById("sexo");
const actividadSelect = document.getElementById("actividad");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const edadInput = document.getElementById("edad");
const calMin = document.getElementById("calMin");
const calMax = document.getElementById("calMax");
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
    tmb = calcularTMB(peso, altura, edad);
    console.log(tmb);
}
//Evento de calculo
botonCalculo.addEventListener("click", recogidaDatos);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNvaWRlYWwvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vRGVmaW5pY2lvbiBkZSBsYXMgdmFyaWFibGVzXHJcbmxldCBub21icmU7XHJcbi8vQ2FwdHVyYSBkZSBpbmYgYSBwYXJ0aXIgZGVsIGZvcm11bGFyaW9cclxuY29uc3Qgc2V4b1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V4b1wiKTtcclxuY29uc3QgYWN0aXZpZGFkU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmlkYWRcIik7XHJcbmNvbnN0IHBlc29JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVzb1wiKTtcclxuY29uc3QgYWx0dXJhSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdHVyYVwiKTtcclxuY29uc3QgZWRhZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGFkXCIpO1xyXG5jb25zdCBjYWxNaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbE1pblwiKTtcclxuY29uc3QgY2FsTWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxNYXhcIik7XHJcbmNvbnN0IGJvdG9uQ2FsY3VsbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90b25DYWxjdWxvXCIpO1xyXG5mdW5jdGlvbiBjYWxjdWxhclRNQihwZXNvLCBhbHR1cmEsIGVkYWQsIHNleG8pIHtcclxuICAgIHJldHVybiAoKDEwICogcGVzbykgKyAoNi4yNSAqIGFsdHVyYSkgLSAoNSAqIGVkYWQpIC0gMTYxKTtcclxufVxyXG4vL1RyYW5zZm9ybWFjaW9uIGRlIGRhdG9zIGRlIGZvcm11bGFyaW9cclxuZnVuY3Rpb24gdHJhbnNmb3JtYXIoZWxlbWVudG8pIHtcclxuICAgIGxldCB2YWxvcjtcclxuICAgIHZhbG9yID0gcGFyc2VGbG9hdChlbGVtZW50by52YWx1ZSk7XHJcbiAgICBpZiAoaXNOYU4odmFsb3IpKVxyXG4gICAgICAgIHZhbG9yID0gMDtcclxuICAgIHJldHVybiB2YWxvcjtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1hclNlbGVjdChlbGVtZW50bykge1xyXG4gICAgbGV0IHZhbG9yO1xyXG4gICAgdmFsb3IgPSBwYXJzZUZsb2F0KGVsZW1lbnRvLm9wdGlvbnNbc2V4b1NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZSk7XHJcbiAgICBpZiAoaXNOYU4odmFsb3IpKVxyXG4gICAgICAgIHZhbG9yID0gMDtcclxuICAgIHJldHVybiB2YWxvcjtcclxufVxyXG4vL1JlY29naWRhIGRlIGRhdG9zXHJcbmZ1bmN0aW9uIHJlY29naWRhRGF0b3MoZXZlbnQpIHtcclxuICAgIGxldCBwZXNvO1xyXG4gICAgbGV0IGFsdHVyYTtcclxuICAgIGxldCBlZGFkO1xyXG4gICAgbGV0IHNleG87XHJcbiAgICBsZXQgYWN0aXZpZGFkO1xyXG4gICAgbGV0IHRtYjtcclxuICAgIGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcGVzbyA9IHRyYW5zZm9ybWFyKHBlc29JbnB1dCk7XHJcbiAgICBhbHR1cmEgPSB0cmFuc2Zvcm1hcihhbHR1cmFJbnB1dCk7XHJcbiAgICBlZGFkID0gdHJhbnNmb3JtYXIoZWRhZElucHV0KTtcclxuICAgIHNleG8gPSB0cmFuc2Zvcm1hclNlbGVjdChzZXhvU2VsZWN0KTtcclxuICAgIGFjdGl2aWRhZCA9IHRyYW5zZm9ybWFyU2VsZWN0KGFjdGl2aWRhZFNlbGVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwZXNvKTtcclxuICAgIGNvbnNvbGUubG9nKGFsdHVyYSk7XHJcbiAgICBjb25zb2xlLmxvZyhlZGFkKTtcclxuICAgIGNvbnNvbGUubG9nKHNleG8pO1xyXG4gICAgY29uc29sZS5sb2coYWN0aXZpZGFkKTtcclxuICAgIHRtYiA9IGNhbGN1bGFyVE1CKHBlc28sIGFsdHVyYSwgZWRhZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0bWIpO1xyXG59XHJcbi8vRXZlbnRvIGRlIGNhbGN1bG9cclxuYm90b25DYWxjdWxvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWNvZ2lkYURhdG9zKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9