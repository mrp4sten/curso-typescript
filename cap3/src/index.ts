//Definicion de las variables
let nombre:string="Paco";
let edad:number=40;
let peso:number=80;
let altura:number=175;
let sexo:boolean=true;

//Calculo del IMC
function calcularIMC(peso:number,altura:number):number{
    return peso/(altura*altura);
}

let imc=calcularIMC(peso,altura);

console.log("El calculo del IMC: "+imc);
