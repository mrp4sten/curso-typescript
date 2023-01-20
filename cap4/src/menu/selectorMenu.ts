import { getPlatosApi } from "../util/datosPlatos";
import { PlatoInterface } from "./platoInterface";

export class SelectorMenu{
    //Propiedades
    private _platos:PlatoInterface[];

    //Constructror
    constructor(){
        this._platos=[];
        getPlatosApi(this);
        console.log("Se genera el selector de Platos");
    }

    //Metodos
    set platos(platos:PlatoInterface[]){
        this._platos=platos;
    }

}