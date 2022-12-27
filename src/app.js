const util=require("./util.js");
const pedido=[];


function nuevoElm(elm){
    pedido.push(elm);
    util.log("[-NUEVO-] "+elm)
}

function borrarElm(ind){
    pedido.splice(ind,1);
    util.log("[ BORRADO ] "+ind);
}

nuevoElm("Nigiri salmon");
nuevoElm("California roll");
borrarElm("Nigiri salmon");
