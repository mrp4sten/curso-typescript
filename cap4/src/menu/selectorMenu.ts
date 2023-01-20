import { getPlatosApi } from "../util/datosPlatos";
import { PlatoInterface } from "./platoInterface";

export class SelectorMenu{
    //Propiedades
    private _platos:PlatoInterface[];

    public primerosUL:HTMLElement;

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

    mostrarPrimeros(){
        this._platos.forEach((plato:PlatoInterface) => {
            this.primerosUL.innerHTML= this.primerosUL.innerHTML+`<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`
        });
    }

}