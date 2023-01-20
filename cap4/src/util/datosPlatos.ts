import {PlatoInterface} from '../menu/platoInterface';
import { SelectorMenu } from '../menu/selectorMenu';


function getPlatosApi(sMenu:SelectorMenu){
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=main%20course&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
    .then((response) => response.json())
    .then((data) =>{ 
        let PLATOS:PlatoInterface[];
        PLATOS=data.results;
        PLATOS.forEach((plato:PlatoInterface)=>console.log(`titulo: ${plato.title}`));
        sMenu.platos=PLATOS;
    }); 
}

export{getPlatosApi};