//Definicion de las variables
let nombre:string="Paco";
let edad:number=40;
let sexo:boolean=true;
//Captura de inf a partir del formulario
const pesoInput:HTMLInputElement=<HTMLInputElement>document.getElementById("peso");
const alturaInput:HTMLInputElement=<HTMLInputElement>document.getElementById("altura");
const botonCalculo:HTMLButtonElement=<HTMLButtonElement>document.getElementById("botonCalculo");

//Transformacion de datos de formulario
function transformar(elemento:HTMLInputElement):number{
    let valor:number|any;

    valor=parseFloat(elemento.value);
    if(isNaN(valor)) valor=0;
    return valor;
}

//Calculo del IMC
function calcularIMC(event:any){
    let peso:number;
    let altura:number;

    event?.preventDefault();

    peso=transformar(pesoInput);
    altura=transformar(alturaInput);

    console.log(peso);
    console.log(altura);
}

//Evento de calculo
botonCalculo.addEventListener("click",calcularIMC);

