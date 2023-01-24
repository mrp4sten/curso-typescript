/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu/platoInterface.ts":
/*!************************************!*\
  !*** ./src/menu/platoInterface.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlatoCategory = void 0;
var PlatoCategory;
(function (PlatoCategory) {
    PlatoCategory[PlatoCategory["ENTRANTES"] = 0] = "ENTRANTES";
    PlatoCategory[PlatoCategory["PRIMEROS"] = 1] = "PRIMEROS";
    PlatoCategory[PlatoCategory["SEGUNDOS"] = 2] = "SEGUNDOS";
    PlatoCategory[PlatoCategory["POSTRES"] = 3] = "POSTRES";
})(PlatoCategory || (PlatoCategory = {}));
exports.PlatoCategory = PlatoCategory;


/***/ }),

/***/ "./src/menu/selectorMenu.ts":
/*!**********************************!*\
  !*** ./src/menu/selectorMenu.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectorMenu = void 0;
const datosPlatos_1 = __webpack_require__(/*! ../util/datosPlatos */ "./src/util/datosPlatos.ts");
const platoInterface_1 = __webpack_require__(/*! ./platoInterface */ "./src/menu/platoInterface.ts");
class SelectorMenu {
    //Constructror
    constructor() {
        this._platos = [];
        (0, datosPlatos_1.getPlatosApi)(this);
        console.log("Se genera el selector de Platos");
    }
    //Metodos
    set platos(platos) {
        platos.forEach(plato => this._platos.push(plato));
    }
    mostrarPlatos(categoria) {
        this._platos.forEach((plato) => {
            if (plato.category == categoria) {
                if (categoria == platoInterface_1.PlatoCategory.ENTRANTES)
                    this.entrantesUL.innerHTML = this.entrantesUL.innerHTML + `<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`;
                else if (categoria == platoInterface_1.PlatoCategory.PRIMEROS)
                    this.primerosUL.innerHTML = this.primerosUL.innerHTML + `<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`;
                else if (categoria == platoInterface_1.PlatoCategory.SEGUNDOS)
                    this.segundosUL.innerHTML = this.segundosUL.innerHTML + `<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`;
                else if (categoria == platoInterface_1.PlatoCategory.POSTRES)
                    this.postresUL.innerHTML = this.postresUL.innerHTML + `<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`;
            }
        });
    }
}
exports.SelectorMenu = SelectorMenu;


/***/ }),

/***/ "./src/util/datosPlatos.ts":
/*!*********************************!*\
  !*** ./src/util/datosPlatos.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPlatosApi = void 0;
const platoInterface_1 = __webpack_require__(/*! ../menu/platoInterface */ "./src/menu/platoInterface.ts");
function getPlatosApi(sMenu) {
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=appetizer&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
        .then((response) => response.json())
        .then((data) => {
        let PLATOS;
        PLATOS = data.results;
        PLATOS.forEach((plato) => {
            console.log(`titulo: ${plato.title}`);
            plato.category = platoInterface_1.PlatoCategory.ENTRANTES;
        });
        sMenu.platos = PLATOS;
        sMenu.mostrarPlatos(platoInterface_1.PlatoCategory.ENTRANTES);
    });
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=main%20course&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
        .then((response) => response.json())
        .then((data) => {
        let PLATOS;
        PLATOS = data.results;
        PLATOS.forEach((plato) => {
            console.log(`titulo: ${plato.title}`);
            plato.category = platoInterface_1.PlatoCategory.PRIMEROS;
        });
        sMenu.platos = PLATOS;
        sMenu.mostrarPlatos(platoInterface_1.PlatoCategory.PRIMEROS);
    });
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=salad&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
        .then((response) => response.json())
        .then((data) => {
        let PLATOS;
        PLATOS = data.results;
        PLATOS.forEach((plato) => {
            console.log(`titulo: ${plato.title}`);
            plato.category = platoInterface_1.PlatoCategory.SEGUNDOS;
        });
        sMenu.platos = PLATOS;
        sMenu.mostrarPlatos(platoInterface_1.PlatoCategory.SEGUNDOS);
    });
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=dessert&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
        .then((response) => response.json())
        .then((data) => {
        let PLATOS;
        PLATOS = data.results;
        PLATOS.forEach((plato) => {
            console.log(`titulo: ${plato.title}`);
            plato.category = platoInterface_1.PlatoCategory.POSTRES;
        });
        sMenu.platos = PLATOS;
        sMenu.mostrarPlatos(platoInterface_1.PlatoCategory.POSTRES);
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
compPlatos.entrantesUL = document.getElementById("entrantes");
compPlatos.primerosUL = document.getElementById("primeros");
compPlatos.segundosUL = document.getElementById("segundos");
compPlatos.postresUL = document.getElementById("postres");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDLHFCQUFxQjs7Ozs7Ozs7Ozs7QUNWUjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIsc0JBQXNCLG1CQUFPLENBQUMsc0RBQXFCO0FBQ25ELHlCQUF5QixtQkFBTyxDQUFDLHNEQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsWUFBWSx5QkFBeUIsWUFBWTtBQUNoSjtBQUNBLDZGQUE2RixZQUFZLHlCQUF5QixZQUFZO0FBQzlJO0FBQ0EsNkZBQTZGLFlBQVkseUJBQXlCLFlBQVk7QUFDOUk7QUFDQSwyRkFBMkYsWUFBWSx5QkFBeUIsWUFBWTtBQUM1STtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQy9CUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIseUJBQXlCLG1CQUFPLENBQUMsNERBQXdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQjs7Ozs7OztVQ3REcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0RWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCLG1CQUFPLENBQUMsdURBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9tZW51L3BsYXRvSW50ZXJmYWNlLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvbWVudS9zZWxlY3Rvck1lbnUudHMiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy91dGlsL2RhdG9zUGxhdG9zLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9hcHBUTUIudHMiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9hcHBNZW51LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUGxhdG9DYXRlZ29yeSA9IHZvaWQgMDtcclxudmFyIFBsYXRvQ2F0ZWdvcnk7XHJcbihmdW5jdGlvbiAoUGxhdG9DYXRlZ29yeSkge1xyXG4gICAgUGxhdG9DYXRlZ29yeVtQbGF0b0NhdGVnb3J5W1wiRU5UUkFOVEVTXCJdID0gMF0gPSBcIkVOVFJBTlRFU1wiO1xyXG4gICAgUGxhdG9DYXRlZ29yeVtQbGF0b0NhdGVnb3J5W1wiUFJJTUVST1NcIl0gPSAxXSA9IFwiUFJJTUVST1NcIjtcclxuICAgIFBsYXRvQ2F0ZWdvcnlbUGxhdG9DYXRlZ29yeVtcIlNFR1VORE9TXCJdID0gMl0gPSBcIlNFR1VORE9TXCI7XHJcbiAgICBQbGF0b0NhdGVnb3J5W1BsYXRvQ2F0ZWdvcnlbXCJQT1NUUkVTXCJdID0gM10gPSBcIlBPU1RSRVNcIjtcclxufSkoUGxhdG9DYXRlZ29yeSB8fCAoUGxhdG9DYXRlZ29yeSA9IHt9KSk7XHJcbmV4cG9ydHMuUGxhdG9DYXRlZ29yeSA9IFBsYXRvQ2F0ZWdvcnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU2VsZWN0b3JNZW51ID0gdm9pZCAwO1xyXG5jb25zdCBkYXRvc1BsYXRvc18xID0gcmVxdWlyZShcIi4uL3V0aWwvZGF0b3NQbGF0b3NcIik7XHJcbmNvbnN0IHBsYXRvSW50ZXJmYWNlXzEgPSByZXF1aXJlKFwiLi9wbGF0b0ludGVyZmFjZVwiKTtcclxuY2xhc3MgU2VsZWN0b3JNZW51IHtcclxuICAgIC8vQ29uc3RydWN0cm9yXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9wbGF0b3MgPSBbXTtcclxuICAgICAgICAoMCwgZGF0b3NQbGF0b3NfMS5nZXRQbGF0b3NBcGkpKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2UgZ2VuZXJhIGVsIHNlbGVjdG9yIGRlIFBsYXRvc1wiKTtcclxuICAgIH1cclxuICAgIC8vTWV0b2Rvc1xyXG4gICAgc2V0IHBsYXRvcyhwbGF0b3MpIHtcclxuICAgICAgICBwbGF0b3MuZm9yRWFjaChwbGF0byA9PiB0aGlzLl9wbGF0b3MucHVzaChwbGF0bykpO1xyXG4gICAgfVxyXG4gICAgbW9zdHJhclBsYXRvcyhjYXRlZ29yaWEpIHtcclxuICAgICAgICB0aGlzLl9wbGF0b3MuZm9yRWFjaCgocGxhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYXRvLmNhdGVnb3J5ID09IGNhdGVnb3JpYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3JpYSA9PSBwbGF0b0ludGVyZmFjZV8xLlBsYXRvQ2F0ZWdvcnkuRU5UUkFOVEVTKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50cmFudGVzVUwuaW5uZXJIVE1MID0gdGhpcy5lbnRyYW50ZXNVTC5pbm5lckhUTUwgKyBgPGxpPjxpbWcgc3JjPVwiJHtwbGF0by5pbWFnZX1cIiBhbHQ9XCJcIiB3aWR0aD1cIjUwXCI+PHA+JHtwbGF0by50aXRsZX08L3A+PC9saT5gO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2F0ZWdvcmlhID09IHBsYXRvSW50ZXJmYWNlXzEuUGxhdG9DYXRlZ29yeS5QUklNRVJPUylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW1lcm9zVUwuaW5uZXJIVE1MID0gdGhpcy5wcmltZXJvc1VMLmlubmVySFRNTCArIGA8bGk+PGltZyBzcmM9XCIke3BsYXRvLmltYWdlfVwiIGFsdD1cIlwiIHdpZHRoPVwiNTBcIj48cD4ke3BsYXRvLnRpdGxlfTwvcD48L2xpPmA7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjYXRlZ29yaWEgPT0gcGxhdG9JbnRlcmZhY2VfMS5QbGF0b0NhdGVnb3J5LlNFR1VORE9TKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VndW5kb3NVTC5pbm5lckhUTUwgPSB0aGlzLnNlZ3VuZG9zVUwuaW5uZXJIVE1MICsgYDxsaT48aW1nIHNyYz1cIiR7cGxhdG8uaW1hZ2V9XCIgYWx0PVwiXCIgd2lkdGg9XCI1MFwiPjxwPiR7cGxhdG8udGl0bGV9PC9wPjwvbGk+YDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNhdGVnb3JpYSA9PSBwbGF0b0ludGVyZmFjZV8xLlBsYXRvQ2F0ZWdvcnkuUE9TVFJFUylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RyZXNVTC5pbm5lckhUTUwgPSB0aGlzLnBvc3RyZXNVTC5pbm5lckhUTUwgKyBgPGxpPjxpbWcgc3JjPVwiJHtwbGF0by5pbWFnZX1cIiBhbHQ9XCJcIiB3aWR0aD1cIjUwXCI+PHA+JHtwbGF0by50aXRsZX08L3A+PC9saT5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TZWxlY3Rvck1lbnUgPSBTZWxlY3Rvck1lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0UGxhdG9zQXBpID0gdm9pZCAwO1xyXG5jb25zdCBwbGF0b0ludGVyZmFjZV8xID0gcmVxdWlyZShcIi4uL21lbnUvcGxhdG9JbnRlcmZhY2VcIik7XHJcbmZ1bmN0aW9uIGdldFBsYXRvc0FwaShzTWVudSkge1xyXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwb29uYWN1bGFyLmNvbS9yZWNpcGVzL2NvbXBsZXhTZWFyY2g/dHlwZT1hcHBldGl6ZXImbnVtYmVyPTQmYXBpS2V5PWJhMWRlMGY0MDNmMTRkZDc5YWJlMGI3NmQ5ZTZjMDIyJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBQTEFUT1M7XHJcbiAgICAgICAgUExBVE9TID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgIFBMQVRPUy5mb3JFYWNoKChwbGF0bykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdGl0dWxvOiAke3BsYXRvLnRpdGxlfWApO1xyXG4gICAgICAgICAgICBwbGF0by5jYXRlZ29yeSA9IHBsYXRvSW50ZXJmYWNlXzEuUGxhdG9DYXRlZ29yeS5FTlRSQU5URVM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc01lbnUucGxhdG9zID0gUExBVE9TO1xyXG4gICAgICAgIHNNZW51Lm1vc3RyYXJQbGF0b3MocGxhdG9JbnRlcmZhY2VfMS5QbGF0b0NhdGVnb3J5LkVOVFJBTlRFUyk7XHJcbiAgICB9KTtcclxuICAgIGZldGNoKCdodHRwczovL2FwaS5zcG9vbmFjdWxhci5jb20vcmVjaXBlcy9jb21wbGV4U2VhcmNoP3R5cGU9bWFpbiUyMGNvdXJzZSZudW1iZXI9NCZhcGlLZXk9YmExZGUwZjQwM2YxNGRkNzlhYmUwYjc2ZDllNmMwMjInKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IFBMQVRPUztcclxuICAgICAgICBQTEFUT1MgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgUExBVE9TLmZvckVhY2goKHBsYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aXR1bG86ICR7cGxhdG8udGl0bGV9YCk7XHJcbiAgICAgICAgICAgIHBsYXRvLmNhdGVnb3J5ID0gcGxhdG9JbnRlcmZhY2VfMS5QbGF0b0NhdGVnb3J5LlBSSU1FUk9TO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNNZW51LnBsYXRvcyA9IFBMQVRPUztcclxuICAgICAgICBzTWVudS5tb3N0cmFyUGxhdG9zKHBsYXRvSW50ZXJmYWNlXzEuUGxhdG9DYXRlZ29yeS5QUklNRVJPUyk7XHJcbiAgICB9KTtcclxuICAgIGZldGNoKCdodHRwczovL2FwaS5zcG9vbmFjdWxhci5jb20vcmVjaXBlcy9jb21wbGV4U2VhcmNoP3R5cGU9c2FsYWQmbnVtYmVyPTQmYXBpS2V5PWJhMWRlMGY0MDNmMTRkZDc5YWJlMGI3NmQ5ZTZjMDIyJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBQTEFUT1M7XHJcbiAgICAgICAgUExBVE9TID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgIFBMQVRPUy5mb3JFYWNoKChwbGF0bykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdGl0dWxvOiAke3BsYXRvLnRpdGxlfWApO1xyXG4gICAgICAgICAgICBwbGF0by5jYXRlZ29yeSA9IHBsYXRvSW50ZXJmYWNlXzEuUGxhdG9DYXRlZ29yeS5TRUdVTkRPUztcclxuICAgICAgICB9KTtcclxuICAgICAgICBzTWVudS5wbGF0b3MgPSBQTEFUT1M7XHJcbiAgICAgICAgc01lbnUubW9zdHJhclBsYXRvcyhwbGF0b0ludGVyZmFjZV8xLlBsYXRvQ2F0ZWdvcnkuU0VHVU5ET1MpO1xyXG4gICAgfSk7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuc3Bvb25hY3VsYXIuY29tL3JlY2lwZXMvY29tcGxleFNlYXJjaD90eXBlPWRlc3NlcnQmbnVtYmVyPTQmYXBpS2V5PWJhMWRlMGY0MDNmMTRkZDc5YWJlMGI3NmQ5ZTZjMDIyJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBQTEFUT1M7XHJcbiAgICAgICAgUExBVE9TID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgIFBMQVRPUy5mb3JFYWNoKChwbGF0bykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdGl0dWxvOiAke3BsYXRvLnRpdGxlfWApO1xyXG4gICAgICAgICAgICBwbGF0by5jYXRlZ29yeSA9IHBsYXRvSW50ZXJmYWNlXzEuUGxhdG9DYXRlZ29yeS5QT1NUUkVTO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNNZW51LnBsYXRvcyA9IFBMQVRPUztcclxuICAgICAgICBzTWVudS5tb3N0cmFyUGxhdG9zKHBsYXRvSW50ZXJmYWNlXzEuUGxhdG9DYXRlZ29yeS5QT1NUUkVTKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0UGxhdG9zQXBpID0gZ2V0UGxhdG9zQXBpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vQ2FsY3VsbyBkZSBsYXMgY2Fsb3JpYXMgb3B0aW1hc1xyXG4vL0RlZmluaWNpb24gZGUgbGFzIHZhcmlhYmxlc1xyXG5sZXQgbm9tYnJlO1xyXG4vL0NhcHR1cmEgZGUgaW5mIGEgcGFydGlyIGRlbCBmb3JtdWxhcmlvXHJcbmNvbnN0IHNleG9TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNleG9cIik7XHJcbmNvbnN0IGFjdGl2aWRhZFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpZGFkXCIpO1xyXG5jb25zdCBwZXNvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlc29cIik7XHJcbmNvbnN0IGFsdHVyYUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHR1cmFcIik7XHJcbmNvbnN0IGVkYWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRhZFwiKTtcclxuY29uc3QgS2NhbE9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiS2NhbE9wdFwiKTtcclxuY29uc3QgYm90b25DYWxjdWxvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3RvbkNhbGN1bG9cIik7XHJcbmZ1bmN0aW9uIGNhbGN1bGFyVE1CKHBlc28sIGFsdHVyYSwgZWRhZCwgc2V4bykge1xyXG4gICAgaWYgKHNleG8gPT0gMSkge1xyXG4gICAgICAgIHJldHVybiAoKDEwICogcGVzbykgKyAoNi4yNSAqIGFsdHVyYSkgLSAoNSAqIGVkYWQpIC0gMTYxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoKDEwICogcGVzbykgKyAoNi4yNSAqIGFsdHVyYSkgLSAoNSAqIGVkYWQpICsgNSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2FsY3VsYXJLY2FsKGFjdGl2aWRhZCwgdG1iKSB7XHJcbiAgICBpZiAoYWN0aXZpZGFkID09IDEpXHJcbiAgICAgICAgcmV0dXJuICh0bWIgKiAxLjM3NSkgLyAxMDAwO1xyXG4gICAgZWxzZSBpZiAoYWN0aXZpZGFkID09IDIpXHJcbiAgICAgICAgcmV0dXJuICh0bWIgKiAxLjU1KSAvIDEwMDA7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuICh0bWIgKiAxLjcyNSkgLyAxMDAwO1xyXG59XHJcbi8vVHJhbnNmb3JtYWNpb24gZGUgZGF0b3MgZGUgZm9ybXVsYXJpb1xyXG5mdW5jdGlvbiB0cmFuc2Zvcm1hcihlbGVtZW50bykge1xyXG4gICAgbGV0IHZhbG9yO1xyXG4gICAgdmFsb3IgPSBwYXJzZUZsb2F0KGVsZW1lbnRvLnZhbHVlKTtcclxuICAgIGlmIChpc05hTih2YWxvcikpXHJcbiAgICAgICAgdmFsb3IgPSAwO1xyXG4gICAgcmV0dXJuIHZhbG9yO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zZm9ybWFyU2VsZWN0KGVsZW1lbnRvKSB7XHJcbiAgICBsZXQgdmFsb3I7XHJcbiAgICB2YWxvciA9IHBhcnNlRmxvYXQoZWxlbWVudG8ub3B0aW9uc1tzZXhvU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlKTtcclxuICAgIGlmIChpc05hTih2YWxvcikpXHJcbiAgICAgICAgdmFsb3IgPSAwO1xyXG4gICAgcmV0dXJuIHZhbG9yO1xyXG59XHJcbi8vUmVjb2dpZGEgZGUgZGF0b3NcclxuZnVuY3Rpb24gcmVjb2dpZGFEYXRvcyhldmVudCkge1xyXG4gICAgbGV0IHBlc287XHJcbiAgICBsZXQgYWx0dXJhO1xyXG4gICAgbGV0IGVkYWQ7XHJcbiAgICBsZXQgc2V4bztcclxuICAgIGxldCBhY3RpdmlkYWQ7XHJcbiAgICBsZXQgdG1iO1xyXG4gICAgbGV0IGtjYWxtaW47XHJcbiAgICBldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBlc28gPSB0cmFuc2Zvcm1hcihwZXNvSW5wdXQpO1xyXG4gICAgYWx0dXJhID0gdHJhbnNmb3JtYXIoYWx0dXJhSW5wdXQpO1xyXG4gICAgZWRhZCA9IHRyYW5zZm9ybWFyKGVkYWRJbnB1dCk7XHJcbiAgICBzZXhvID0gdHJhbnNmb3JtYXJTZWxlY3Qoc2V4b1NlbGVjdCk7XHJcbiAgICBhY3RpdmlkYWQgPSB0cmFuc2Zvcm1hclNlbGVjdChhY3RpdmlkYWRTZWxlY3QpO1xyXG4gICAgY29uc29sZS5sb2cocGVzbyk7XHJcbiAgICBjb25zb2xlLmxvZyhhbHR1cmEpO1xyXG4gICAgY29uc29sZS5sb2coZWRhZCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZXhvKTtcclxuICAgIGNvbnNvbGUubG9nKGFjdGl2aWRhZCk7XHJcbiAgICB0bWIgPSBjYWxjdWxhclRNQihwZXNvLCBhbHR1cmEsIGVkYWQsIHNleG8pO1xyXG4gICAga2NhbG1pbiA9IGNhbGN1bGFyS2NhbChhY3RpdmlkYWQsIHRtYik7XHJcbiAgICBjb25zb2xlLmxvZyh0bWIpO1xyXG4gICAgY29uc29sZS5sb2coa2NhbG1pbik7XHJcbiAgICBLY2FsT3B0LnZhbHVlID0ga2NhbG1pbi50b1N0cmluZygpO1xyXG59XHJcbi8vRXZlbnRvIGRlIGNhbGN1bG8gZm9ybXVsYXJpbyBuYXZlZ2FjaW9uXHJcbmJvdG9uQ2FsY3Vsby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVjb2dpZGFEYXRvcyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNlbGVjdG9yTWVudV8xID0gcmVxdWlyZShcIi4vbWVudS9zZWxlY3Rvck1lbnVcIik7XHJcbmNvbnNvbGUubG9nKFwiQmllbnZlbmlkbyBhIFdvbmRlckZvb2RcIik7XHJcbi8vRWwgY29tcG9uZW50ZSBkZSBTZWxlY2Npb24gUGxhdG9zXHJcbmNvbnN0IGNvbXBQbGF0b3MgPSBuZXcgc2VsZWN0b3JNZW51XzEuU2VsZWN0b3JNZW51KCk7XHJcbmNvbXBQbGF0b3MuZW50cmFudGVzVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudHJhbnRlc1wiKTtcclxuY29tcFBsYXRvcy5wcmltZXJvc1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmltZXJvc1wiKTtcclxuY29tcFBsYXRvcy5zZWd1bmRvc1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWd1bmRvc1wiKTtcclxuY29tcFBsYXRvcy5wb3N0cmVzVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3RyZXNcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==