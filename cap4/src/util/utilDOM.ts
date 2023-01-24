import { SelectorMenu } from "../menu/selectorMenu";
import {compPlatos} from "../appMenu";

function anyadirMenu(event: any){
    const platoElm:HTMLElement=event.target;
    const id:number=parseInt(platoElm.dataset.id);
    console.log(compPlatos.getPlato(id));
}

export{anyadirMenu};