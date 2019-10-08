'use strict'

var numero = parseInt(prompt("Introduce un numero"));

    while (isNaN(numero)) {
    numero = parseInt(prompt("Introduce un numero"));
  }

  console.log("Numero: " + numero);

  for (var i = 1; i <= numero; i++) {
    if (numero%i == 0) {
      console.log(i);    
    }    
  }