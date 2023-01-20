/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu/selectorMenu.ts":
/*!**********************************!*\
  !*** ./src/menu/selectorMenu.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectorMenu = void 0;
const datosPlatos_1 = __webpack_require__(/*! ../util/datosPlatos */ "./src/util/datosPlatos.ts");
class SelectorMenu {
    //Constructror
    constructor() {
        this._platos = [];
        (0, datosPlatos_1.getPlatosApi)(this);
        console.log("Se genera el selector de Platos");
    }
    //Metodos
    set platos(platos) {
        this._platos = platos;
    }
    mostrarPrimeros() {
        this._platos.forEach((plato) => {
            this.primerosUL.innerHTML = this.primerosUL.innerHTML + `<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`;
        });
    }
}
exports.SelectorMenu = SelectorMenu;


/***/ }),

/***/ "./src/util/datosPlatos.ts":
/*!*********************************!*\
  !*** ./src/util/datosPlatos.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPlatosApi = void 0;
function getPlatosApi(sMenu) {
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=main%20course&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
        .then((response) => response.json())
        .then((data) => {
        let PLATOS;
        PLATOS = data.results;
        sMenu.platos = PLATOS;
        sMenu.mostrarPrimeros();
        PLATOS.forEach((plato) => console.log(`titulo: ${plato.title}`));
    });
}
exports.getPlatosApi = getPlatosApi;


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
const selectorMenu_1 = __webpack_require__(/*! ./menu/selectorMenu */ "./src/menu/selectorMenu.ts");
console.log("Bienvenido a WonderFood");
//El componente de Seleccion Platos
const compPlatos = new selectorMenu_1.SelectorMenu();
compPlatos.primerosUL = document.getElementById("primeros");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLHNCQUFzQixtQkFBTyxDQUFDLHNEQUFxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixZQUFZLHlCQUF5QixZQUFZO0FBQ3RJLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQ3JCUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxZQUFZO0FBQ3JFLEtBQUs7QUFDTDtBQUNBLG9CQUFvQjs7Ozs7OztVQ2RwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3RFYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL21lbnUvc2VsZWN0b3JNZW51LnRzIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvdXRpbC9kYXRvc1BsYXRvcy50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvYXBwVE1CLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvYXBwTWVudS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNlbGVjdG9yTWVudSA9IHZvaWQgMDtcclxuY29uc3QgZGF0b3NQbGF0b3NfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2RhdG9zUGxhdG9zXCIpO1xyXG5jbGFzcyBTZWxlY3Rvck1lbnUge1xyXG4gICAgLy9Db25zdHJ1Y3Ryb3JcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3BsYXRvcyA9IFtdO1xyXG4gICAgICAgICgwLCBkYXRvc1BsYXRvc18xLmdldFBsYXRvc0FwaSkodGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZSBnZW5lcmEgZWwgc2VsZWN0b3IgZGUgUGxhdG9zXCIpO1xyXG4gICAgfVxyXG4gICAgLy9NZXRvZG9zXHJcbiAgICBzZXQgcGxhdG9zKHBsYXRvcykge1xyXG4gICAgICAgIHRoaXMuX3BsYXRvcyA9IHBsYXRvcztcclxuICAgIH1cclxuICAgIG1vc3RyYXJQcmltZXJvcygpIHtcclxuICAgICAgICB0aGlzLl9wbGF0b3MuZm9yRWFjaCgocGxhdG8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcmltZXJvc1VMLmlubmVySFRNTCA9IHRoaXMucHJpbWVyb3NVTC5pbm5lckhUTUwgKyBgPGxpPjxpbWcgc3JjPVwiJHtwbGF0by5pbWFnZX1cIiBhbHQ9XCJcIiB3aWR0aD1cIjUwXCI+PHA+JHtwbGF0by50aXRsZX08L3A+PC9saT5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2VsZWN0b3JNZW51ID0gU2VsZWN0b3JNZW51O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldFBsYXRvc0FwaSA9IHZvaWQgMDtcclxuZnVuY3Rpb24gZ2V0UGxhdG9zQXBpKHNNZW51KSB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuc3Bvb25hY3VsYXIuY29tL3JlY2lwZXMvY29tcGxleFNlYXJjaD90eXBlPW1haW4lMjBjb3Vyc2UmbnVtYmVyPTQmYXBpS2V5PWJhMWRlMGY0MDNmMTRkZDc5YWJlMGI3NmQ5ZTZjMDIyJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBQTEFUT1M7XHJcbiAgICAgICAgUExBVE9TID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgIHNNZW51LnBsYXRvcyA9IFBMQVRPUztcclxuICAgICAgICBzTWVudS5tb3N0cmFyUHJpbWVyb3MoKTtcclxuICAgICAgICBQTEFUT1MuZm9yRWFjaCgocGxhdG8pID0+IGNvbnNvbGUubG9nKGB0aXR1bG86ICR7cGxhdG8udGl0bGV9YCkpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZXRQbGF0b3NBcGkgPSBnZXRQbGF0b3NBcGk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLy9DYWxjdWxvIGRlIGxhcyBjYWxvcmlhcyBvcHRpbWFzXHJcbi8vRGVmaW5pY2lvbiBkZSBsYXMgdmFyaWFibGVzXHJcbmxldCBub21icmU7XHJcbi8vQ2FwdHVyYSBkZSBpbmYgYSBwYXJ0aXIgZGVsIGZvcm11bGFyaW9cclxuY29uc3Qgc2V4b1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V4b1wiKTtcclxuY29uc3QgYWN0aXZpZGFkU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmlkYWRcIik7XHJcbmNvbnN0IHBlc29JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVzb1wiKTtcclxuY29uc3QgYWx0dXJhSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdHVyYVwiKTtcclxuY29uc3QgZWRhZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGFkXCIpO1xyXG5jb25zdCBLY2FsT3B0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJLY2FsT3B0XCIpO1xyXG5jb25zdCBib3RvbkNhbGN1bG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdG9uQ2FsY3Vsb1wiKTtcclxuZnVuY3Rpb24gY2FsY3VsYXJUTUIocGVzbywgYWx0dXJhLCBlZGFkLCBzZXhvKSB7XHJcbiAgICBpZiAoc2V4byA9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuICgoMTAgKiBwZXNvKSArICg2LjI1ICogYWx0dXJhKSAtICg1ICogZWRhZCkgLSAxNjEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICgoMTAgKiBwZXNvKSArICg2LjI1ICogYWx0dXJhKSAtICg1ICogZWRhZCkgKyA1KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhcktjYWwoYWN0aXZpZGFkLCB0bWIpIHtcclxuICAgIGlmIChhY3RpdmlkYWQgPT0gMSlcclxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuMzc1KSAvIDEwMDA7XHJcbiAgICBlbHNlIGlmIChhY3RpdmlkYWQgPT0gMilcclxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuNTUpIC8gMTAwMDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuNzI1KSAvIDEwMDA7XHJcbn1cclxuLy9UcmFuc2Zvcm1hY2lvbiBkZSBkYXRvcyBkZSBmb3JtdWxhcmlvXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybWFyKGVsZW1lbnRvKSB7XHJcbiAgICBsZXQgdmFsb3I7XHJcbiAgICB2YWxvciA9IHBhcnNlRmxvYXQoZWxlbWVudG8udmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKHZhbG9yKSlcclxuICAgICAgICB2YWxvciA9IDA7XHJcbiAgICByZXR1cm4gdmFsb3I7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNmb3JtYXJTZWxlY3QoZWxlbWVudG8pIHtcclxuICAgIGxldCB2YWxvcjtcclxuICAgIHZhbG9yID0gcGFyc2VGbG9hdChlbGVtZW50by5vcHRpb25zW3NleG9TZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKHZhbG9yKSlcclxuICAgICAgICB2YWxvciA9IDA7XHJcbiAgICByZXR1cm4gdmFsb3I7XHJcbn1cclxuLy9SZWNvZ2lkYSBkZSBkYXRvc1xyXG5mdW5jdGlvbiByZWNvZ2lkYURhdG9zKGV2ZW50KSB7XHJcbiAgICBsZXQgcGVzbztcclxuICAgIGxldCBhbHR1cmE7XHJcbiAgICBsZXQgZWRhZDtcclxuICAgIGxldCBzZXhvO1xyXG4gICAgbGV0IGFjdGl2aWRhZDtcclxuICAgIGxldCB0bWI7XHJcbiAgICBsZXQga2NhbG1pbjtcclxuICAgIGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcGVzbyA9IHRyYW5zZm9ybWFyKHBlc29JbnB1dCk7XHJcbiAgICBhbHR1cmEgPSB0cmFuc2Zvcm1hcihhbHR1cmFJbnB1dCk7XHJcbiAgICBlZGFkID0gdHJhbnNmb3JtYXIoZWRhZElucHV0KTtcclxuICAgIHNleG8gPSB0cmFuc2Zvcm1hclNlbGVjdChzZXhvU2VsZWN0KTtcclxuICAgIGFjdGl2aWRhZCA9IHRyYW5zZm9ybWFyU2VsZWN0KGFjdGl2aWRhZFNlbGVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwZXNvKTtcclxuICAgIGNvbnNvbGUubG9nKGFsdHVyYSk7XHJcbiAgICBjb25zb2xlLmxvZyhlZGFkKTtcclxuICAgIGNvbnNvbGUubG9nKHNleG8pO1xyXG4gICAgY29uc29sZS5sb2coYWN0aXZpZGFkKTtcclxuICAgIHRtYiA9IGNhbGN1bGFyVE1CKHBlc28sIGFsdHVyYSwgZWRhZCwgc2V4byk7XHJcbiAgICBrY2FsbWluID0gY2FsY3VsYXJLY2FsKGFjdGl2aWRhZCwgdG1iKTtcclxuICAgIGNvbnNvbGUubG9nKHRtYik7XHJcbiAgICBjb25zb2xlLmxvZyhrY2FsbWluKTtcclxuICAgIEtjYWxPcHQudmFsdWUgPSBrY2FsbWluLnRvU3RyaW5nKCk7XHJcbn1cclxuLy9FdmVudG8gZGUgY2FsY3VsbyBmb3JtdWxhcmlvIG5hdmVnYWNpb25cclxuYm90b25DYWxjdWxvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWNvZ2lkYURhdG9zKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2VsZWN0b3JNZW51XzEgPSByZXF1aXJlKFwiLi9tZW51L3NlbGVjdG9yTWVudVwiKTtcclxuY29uc29sZS5sb2coXCJCaWVudmVuaWRvIGEgV29uZGVyRm9vZFwiKTtcclxuLy9FbCBjb21wb25lbnRlIGRlIFNlbGVjY2lvbiBQbGF0b3NcclxuY29uc3QgY29tcFBsYXRvcyA9IG5ldyBzZWxlY3Rvck1lbnVfMS5TZWxlY3Rvck1lbnUoKTtcclxuY29tcFBsYXRvcy5wcmltZXJvc1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmltZXJvc1wiKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9