//Definicion de las variables
let nombre:string;

//Tipo actividad
const enum TipoActividad{
    baja=1,
    moderada,
    alta
}

//Captura de inf a partir del formulario
const sexoSelect:HTMLSelectElement=document.getElementById("sexo") as HTMLSelectElement;
const actividadSelect:HTMLSelectElement=document.getElementById("actividad") as HTMLSelectElement;
const pesoInput:HTMLInputElement=<HTMLInputElement>document.getElementById("peso");
const alturaInput:HTMLInputElement=<HTMLInputElement>document.getElementById("altura");
const edadInput:HTMLInputElement=<HTMLInputElement>document.getElementById("edad");

const kcMin:HTMLInputElement=document.getElementById("calMin") as HTMLInputElement;
const kcMax:HTMLInputElement=document.getElementById("calMax") as HTMLInputElement;
const botonCalculo:HTMLButtonElement=<HTMLButtonElement>document.getElementById("botonCalculo");

function calcularTMB(peso:number,altura:number,edad:number,sexo:number):number{
    if(sexo==1){
        return ((10*peso)+(6.25*altura)-(5*edad)-161);
    }else{
        return ((10*peso)+(6.25*altura)-(5*edad)+5);
    }
}

function calcularKcal(actividad:number,tmb:number):number{
    if(actividad==1) return (tmb*1.375)/1000;
    else if(actividad==2) return (tmb*1.55)/1000;
    else return (tmb*1.725)/1000;
}

function calcularKcalMax(actividad:number,tmb:number):number{
    if(actividad==TipoActividad.baja) return (tmb*1.55)/1000;
    else if(actividad==TipoActividad.moderada) return (tmb*1.725)/1000;
    else return (tmb*1.9)/1000;
}

//Transformacion de datos de formulario
function transformar(elemento:HTMLInputElement):number{
    let valor:number|any;

    valor=parseFloat(elemento.value);
    if(isNaN(valor)) valor=0;
    return valor;
}
function transformarSelect(elemento:HTMLSelectElement):number{
    let valor:number|any;

    valor=parseFloat(elemento.options[sexoSelect.selectedIndex].value);
    if(isNaN(valor)) valor=0;
    return valor;
}

//Recogida de datos
function recogidaDatos(event:any){
    let peso:number;
    let altura:number;
    let edad:number;
    let sexo:number;
    let actividad:number;

    let tmb:number;
    let kcalmin:number;
    let kcalmax:number;

    event?.preventDefault();

    peso=transformar(pesoInput);
    altura=transformar(alturaInput);
    edad=transformar(edadInput);

    sexo=transformarSelect(sexoSelect);
    actividad=transformarSelect(actividadSelect);

    console.log(peso);
    console.log(altura);
    console.log(edad);
    console.log(sexo);
    console.log(actividad);

    tmb=calcularTMB(peso,altura,edad,sexo);
    kcalmin=calcularKcal(actividad,tmb);
    kcalmax=calcularKcalMax(actividad,tmb)

    console.log(tmb);
    console.log(kcalmin);
    console.log(kcalmax);

    kcMin.value=kcalmin.toString();
    kcMax.value=kcalmax.toString();
    
}

//Evento de calculo
botonCalculo.addEventListener("click",recogidaDatos);

