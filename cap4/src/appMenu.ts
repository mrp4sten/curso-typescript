import {SelectorMenu} from './menu/selectorMenu';

console.log("Bienvenido a WonderFood");

//El componente de Seleccion Platos
const compPlatos:SelectorMenu=new SelectorMenu();
compPlatos.entrantesUL=document.getElementById("entrantes");
compPlatos.primerosUL=document.getElementById("primeros");
compPlatos.segundosUL=document.getElementById("segundos");
compPlatos.postresUL=document.getElementById("postres");

export{compPlatos};