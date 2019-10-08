'use strict'

var numero1 = parseInt(prompt("Introduce un numero")),
    numero2 = parseInt(prompt("Introduce otro numero"));

    while (isNaN(numero1) || isNaN(numero2) ) {
    numero1 = parseInt(prompt("Introduce un numero")),
    numero2 = parseInt(prompt("Introduce otro numero"));
  }

    console.log(numero1);
    console.log(numero2);

    if(numero1 < numero2){
      for (var i = (numero1+1); i < numero2; i++) {
        console.log(i);
      }
    } else {
      for (var i = (numero1-1); i > numero2; i--) {
        console.log(i);
      }
    }