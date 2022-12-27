const pedido=[];

function log(texto){
    console.log(texto);
}

function nuevoElm(elm){
    pedido.push(elm);
    log("[-NUEVO-] "+elm)
}

function borrarElm(ind){
    pedido.splice(ind,1);
    log("[ BORRADO ] "+ind)
}

nuevoElm("Nigiri salmon");
nuevoElm("California roll");
borrarElm("Nigiri salmon");
