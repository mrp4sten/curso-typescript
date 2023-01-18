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
/*!************************!*\
  !*** ./src/appMenu.ts ***!
  \************************/

console.log("Bienvenido a WonderFood");
const PLATOS = [
    {
        "id": 715594,
        "title": "Homemade Garlic and Basil French Fries",
        "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 716268,
        "title": "African Chicken Peanut Stew",
        "image": "https://spoonacular.com/recipeImages/716268-312x231.jpg",
        "imageType": "jpg"
    },
];
PLATOS.forEach((plato) => console.log(`plato: ${plato.title}`));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnREFBZ0QsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvYXBwVE1CLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvYXBwTWVudS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy9DYWxjdWxvIGRlIGxhcyBjYWxvcmlhcyBvcHRpbWFzXHJcbi8vRGVmaW5pY2lvbiBkZSBsYXMgdmFyaWFibGVzXHJcbmxldCBub21icmU7XHJcbi8vQ2FwdHVyYSBkZSBpbmYgYSBwYXJ0aXIgZGVsIGZvcm11bGFyaW9cclxuY29uc3Qgc2V4b1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V4b1wiKTtcclxuY29uc3QgYWN0aXZpZGFkU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmlkYWRcIik7XHJcbmNvbnN0IHBlc29JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVzb1wiKTtcclxuY29uc3QgYWx0dXJhSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdHVyYVwiKTtcclxuY29uc3QgZWRhZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGFkXCIpO1xyXG5jb25zdCBLY2FsT3B0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJLY2FsT3B0XCIpO1xyXG5jb25zdCBib3RvbkNhbGN1bG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdG9uQ2FsY3Vsb1wiKTtcclxuZnVuY3Rpb24gY2FsY3VsYXJUTUIocGVzbywgYWx0dXJhLCBlZGFkLCBzZXhvKSB7XHJcbiAgICBpZiAoc2V4byA9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuICgoMTAgKiBwZXNvKSArICg2LjI1ICogYWx0dXJhKSAtICg1ICogZWRhZCkgLSAxNjEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICgoMTAgKiBwZXNvKSArICg2LjI1ICogYWx0dXJhKSAtICg1ICogZWRhZCkgKyA1KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhcktjYWwoYWN0aXZpZGFkLCB0bWIpIHtcclxuICAgIGlmIChhY3RpdmlkYWQgPT0gMSlcclxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuMzc1KSAvIDEwMDA7XHJcbiAgICBlbHNlIGlmIChhY3RpdmlkYWQgPT0gMilcclxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuNTUpIC8gMTAwMDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuNzI1KSAvIDEwMDA7XHJcbn1cclxuLy9UcmFuc2Zvcm1hY2lvbiBkZSBkYXRvcyBkZSBmb3JtdWxhcmlvXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybWFyKGVsZW1lbnRvKSB7XHJcbiAgICBsZXQgdmFsb3I7XHJcbiAgICB2YWxvciA9IHBhcnNlRmxvYXQoZWxlbWVudG8udmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKHZhbG9yKSlcclxuICAgICAgICB2YWxvciA9IDA7XHJcbiAgICByZXR1cm4gdmFsb3I7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNmb3JtYXJTZWxlY3QoZWxlbWVudG8pIHtcclxuICAgIGxldCB2YWxvcjtcclxuICAgIHZhbG9yID0gcGFyc2VGbG9hdChlbGVtZW50by5vcHRpb25zW3NleG9TZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKHZhbG9yKSlcclxuICAgICAgICB2YWxvciA9IDA7XHJcbiAgICByZXR1cm4gdmFsb3I7XHJcbn1cclxuLy9SZWNvZ2lkYSBkZSBkYXRvc1xyXG5mdW5jdGlvbiByZWNvZ2lkYURhdG9zKGV2ZW50KSB7XHJcbiAgICBsZXQgcGVzbztcclxuICAgIGxldCBhbHR1cmE7XHJcbiAgICBsZXQgZWRhZDtcclxuICAgIGxldCBzZXhvO1xyXG4gICAgbGV0IGFjdGl2aWRhZDtcclxuICAgIGxldCB0bWI7XHJcbiAgICBsZXQga2NhbG1pbjtcclxuICAgIGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcGVzbyA9IHRyYW5zZm9ybWFyKHBlc29JbnB1dCk7XHJcbiAgICBhbHR1cmEgPSB0cmFuc2Zvcm1hcihhbHR1cmFJbnB1dCk7XHJcbiAgICBlZGFkID0gdHJhbnNmb3JtYXIoZWRhZElucHV0KTtcclxuICAgIHNleG8gPSB0cmFuc2Zvcm1hclNlbGVjdChzZXhvU2VsZWN0KTtcclxuICAgIGFjdGl2aWRhZCA9IHRyYW5zZm9ybWFyU2VsZWN0KGFjdGl2aWRhZFNlbGVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwZXNvKTtcclxuICAgIGNvbnNvbGUubG9nKGFsdHVyYSk7XHJcbiAgICBjb25zb2xlLmxvZyhlZGFkKTtcclxuICAgIGNvbnNvbGUubG9nKHNleG8pO1xyXG4gICAgY29uc29sZS5sb2coYWN0aXZpZGFkKTtcclxuICAgIHRtYiA9IGNhbGN1bGFyVE1CKHBlc28sIGFsdHVyYSwgZWRhZCwgc2V4byk7XHJcbiAgICBrY2FsbWluID0gY2FsY3VsYXJLY2FsKGFjdGl2aWRhZCwgdG1iKTtcclxuICAgIGNvbnNvbGUubG9nKHRtYik7XHJcbiAgICBjb25zb2xlLmxvZyhrY2FsbWluKTtcclxuICAgIEtjYWxPcHQudmFsdWUgPSBrY2FsbWluLnRvU3RyaW5nKCk7XHJcbn1cclxuLy9FdmVudG8gZGUgY2FsY3VsbyBmb3JtdWxhcmlvIG5hdmVnYWNpb25cclxuYm90b25DYWxjdWxvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWNvZ2lkYURhdG9zKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnNvbGUubG9nKFwiQmllbnZlbmlkbyBhIFdvbmRlckZvb2RcIik7XHJcbmNvbnN0IFBMQVRPUyA9IFtcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IDcxNTU5NCxcclxuICAgICAgICBcInRpdGxlXCI6IFwiSG9tZW1hZGUgR2FybGljIGFuZCBCYXNpbCBGcmVuY2ggRnJpZXNcIixcclxuICAgICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzcxNTU5NC0zMTJ4MjMxLmpwZ1wiLFxyXG4gICAgICAgIFwiaW1hZ2VUeXBlXCI6IFwianBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiA3MTYyNjgsXHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFmcmljYW4gQ2hpY2tlbiBQZWFudXQgU3Rld1wiLFxyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzE2MjY4LTMxMngyMzEuanBnXCIsXHJcbiAgICAgICAgXCJpbWFnZVR5cGVcIjogXCJqcGdcIlxyXG4gICAgfSxcclxuXTtcclxuUExBVE9TLmZvckVhY2goKHBsYXRvKSA9PiBjb25zb2xlLmxvZyhgcGxhdG86ICR7cGxhdG8udGl0bGV9YCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=