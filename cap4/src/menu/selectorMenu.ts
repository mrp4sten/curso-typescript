import { getPlatosApi } from "../util/datosPlatos";
import { PlatoInterface,PlatoCategory } from "./platoInterface";
import {anyadirMenu} from "../util/utilDOM";

export class SelectorMenu{
    //Propiedades
    private _platos:PlatoInterface[];

    public entrantesUL:HTMLElement;
    public primerosUL:HTMLElement;
    public segundosUL:HTMLElement;
    public postresUL:HTMLElement;

    //Constructror
    constructor(){
        this._platos=[];
        getPlatosApi(this);
        console.log("Se genera el selector de Platos");
    }

    //Metodos
    set platos(platos:PlatoInterface[]){
        platos.forEach(plato=>this._platos.push(plato));
    }

    mostrarPlatos(categoria:PlatoCategory){

        this._platos.forEach((plato:PlatoInterface) => {
            if(plato.category==categoria){
                if(categoria==PlatoCategory.ENTRANTES){
                    let liElm:HTMLLIElement=document.createElement("li");
                    liElm.setAttribute("data-id",`${plato.id}`);
                    liElm.innerHTML=`<img src="${plato.image}" alt="" width="50" data-id="${plato.id}"><p data-id="${plato.id}">${plato.title}</p>`;
                    this.entrantesUL.appendChild(liElm);
                    liElm.addEventListener("click", anyadirMenu);
                    //this.entrantesUL.innerHTML= this.entrantesUL.innerHTML+`<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`
                }
                else if(categoria==PlatoCategory.PRIMEROS)
                    this.primerosUL.innerHTML= this.primerosUL.innerHTML+`<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`
                else if(categoria==PlatoCategory.SEGUNDOS)
                    this.segundosUL.innerHTML= this.segundosUL.innerHTML+`<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`
                else if(categoria==PlatoCategory.POSTRES)
                    this.postresUL.innerHTML= this.postresUL.innerHTML+`<li><img src="${plato.image}" alt="" width="50"><p>${plato.title}</p></li>`
            }
        });
    }

    getPlato(id:number):PlatoInterface{
        return this._platos.find(plato=>plato.id==id);
    }



}