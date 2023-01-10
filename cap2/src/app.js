const util=require("./util.js");
const pedido=[];
const MAX_PEDIDOS=3;
const carrito=document.getElementById('carrito');
var sushi_items = document.getElementsByClassName("sushi_item");

function nuevoElm(elm){
    if(pedido.length<MAX_PEDIDOS){
        carrito.innerHTML=carrito.innerHTML+"<span>"+elm.currentTarget.innerHTML+"</span>"
        pedido.push(elm.currentTarget);
        util.log("[NUEVO] "+elm.currentTarget)
    }else{
        util.log("[CARRRITO] Carrito lleno")
    }
}

function borrarElm(ind){
    pedido.splice(ind,1);
    util.log("[BORRADO] "+ind);
}

for (var i = 0; i < sushi_items.length; i++) {
    sushi_items[i].addEventListener('click', nuevoElm, false);
}