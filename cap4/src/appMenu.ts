import {PLATOS} from './util/datosPlatos';
import {PlatoInterface} from './menu/platoInterface';

console.log("Bienvenido a WonderFood");
PLATOS.forEach((plato:PlatoInterface)=>console.log(`plato: ${plato.title}`));