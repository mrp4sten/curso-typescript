//Definicion de las variables
let nombre:string="Paco";
let edad:number=40;
let sexo:boolean=true;
//Captura de inf a partir del formulario
const pesoInput:HTMLInputElement=<HTMLInputElement>document.getElementById("peso");
const alturaInput:HTMLInputElement=<HTMLInputElement>document.getElementById("altura");
const edadInput:HTMLInputElement=<HTMLInputElement>document.getElementById("edad");
const botonCalculo:HTMLButtonElement=<HTMLButtonElement>document.getElementById("botonCalculo");

function calcularTMB(peso:number,altura:number,edad:number,sexo?:string):number{
        return ((10*peso)+(6.25*altura)-(5*edad)-161);
}

//Transformacion de datos de formulario
function transformar(elemento:HTMLInputElement):number{
    let valor:number|any;

    valor=parseFloat(elemento.value);
    if(isNaN(valor)) valor=0;
    return valor;
}

//Recogida de datos
function recogidaDatos(event:any){
    let peso:number;
    let altura:number;
    let edad:number;

    let tmb:number;

    event?.preventDefault();

    peso=transformar(pesoInput);
    altura=transformar(alturaInput);
    edad=transformar(edadInput);

    console.log(peso);
    console.log(altura);
    console.log(edad);

    tmb=calcularTMB(peso,altura,edad);

    console.log(tmb);
    
}

//Evento de calculo
botonCalculo.addEventListener("click",recogidaDatos);

