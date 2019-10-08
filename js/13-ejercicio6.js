'use strict'

var numero = parseInt(prompt("Introduce un numero"));

  while (isNaN(numero)) {
  numero = parseInt(prompt("Introduce un numero valido"));
}

if (numero%2 == 0) {
  console.log("El numero: " + numero + " es par");
} else {
  console.log("El numero: " + numero + " es impar");
}