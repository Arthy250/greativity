'use strict'

var numero1 = parseInt(prompt("Introduce un numero")),
    numero2 = parseInt(prompt("Introduce otro numero"));

    while (isNaN(numero1) || isNaN(numero2) ) {
    numero1 = parseInt(prompt("Introduce un numero")),
    numero2 = parseInt(prompt("Introduce otro numero"));
  }
    console.log("Numero 1: " + numero1);
    console.log("Numero 2: " + numero2);

    if (numero1 < numero2) {
      while (numero1 < numero2) {
        numero1++;
        if (numero1%2 != 0) {
          console.log(numero1);
        }
      }
    } else {
      while (numero2 < numero1) {
        numero2++;
        if (numero2%2 != 0) {
          console.log(numero2);
        }
      }
    }


    