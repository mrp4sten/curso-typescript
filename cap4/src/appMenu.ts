import {getPlatosApi} from './util/datosPlatos';
import {SelectorMenu} from './menu/selectorMenu';

console.log("Bienvenido a WonderFood");
getPlatosApi();

//El componente de Seleccion Platos
const compPlatos:SelectorMenu=new SelectorMenu();