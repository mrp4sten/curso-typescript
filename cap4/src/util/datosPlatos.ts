import {PlatoInterface,PlatoCategory} from '../menu/platoInterface';
import { SelectorMenu } from '../menu/selectorMenu';


function getPlatosApi(sMenu:SelectorMenu){
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=appetizer&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
    .then((response) => response.json())
    .then((data) =>{ 
        let PLATOS:PlatoInterface[];
        PLATOS=data.results;
        PLATOS.forEach(
            (plato:PlatoInterface)=>{
                console.log(`titulo: ${plato.title}`);
                plato.category=PlatoCategory.ENTRANTES;
            }
        );
        sMenu.platos=PLATOS;
        sMenu.mostrarPlatos(PlatoCategory.ENTRANTES);

    });
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=main%20course&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
    .then((response) => response.json())
    .then((data) =>{ 
        let PLATOS:PlatoInterface[];
        PLATOS=data.results;
        PLATOS.forEach(
            (plato:PlatoInterface)=>{
                console.log(`titulo: ${plato.title}`)
                plato.category=PlatoCategory.PRIMEROS;
            }
        );
        sMenu.platos=PLATOS;
        sMenu.mostrarPlatos(PlatoCategory.PRIMEROS);

    }); 
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=salad&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
    .then((response) => response.json())
    .then((data) =>{ 
        let PLATOS:PlatoInterface[];
        PLATOS=data.results;
        PLATOS.forEach(
            (plato:PlatoInterface)=>{
                console.log(`titulo: ${plato.title}`)
                plato.category=PlatoCategory.SEGUNDOS;
            }
        );
        sMenu.platos=PLATOS;
        sMenu.mostrarPlatos(PlatoCategory.SEGUNDOS);
    }); 
    fetch('https://api.spoonacular.com/recipes/complexSearch?type=dessert&number=4&apiKey=ba1de0f403f14dd79abe0b76d9e6c022')
    .then((response) => response.json())
    .then((data) =>{ 
        let PLATOS:PlatoInterface[];
        PLATOS=data.results;
        PLATOS.forEach(
        (plato:PlatoInterface)=>{
            console.log(`titulo: ${plato.title}`)
            plato.category=PlatoCategory.POSTRES;
        });
        sMenu.platos=PLATOS;
        sMenu.mostrarPlatos(PlatoCategory.POSTRES);
    }); 
}

export{getPlatosApi};