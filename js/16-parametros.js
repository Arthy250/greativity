'use strict'

//Parametros REST y SPREAD


//REST
console.log("REST");
function listaFrutas(fruta1, fruta2, ...resto_frutas){
  console.log("Fruta 1: ", fruta1);
  console.log("Fruta 2: ", fruta2);
  console.log(resto_frutas);
}

listaFrutas("Manzana", "Naranja", "Platano", "Sandia", "Coco");

//SPREAD
console.log("SPREAD");
var frutas = ["Naranja", "Manzana"];
listaFrutas(...frutas, "Platano", "Sandia", "Coco")