'use strict'

var suma = 0,
    contador = 0;

do {
  var numero = parseInt(prompt("Introduce un numero mayor a 0", 0));
  if (isNaN(numero)) {
    numero = 0;
    contador++;
  } else if (numero >= 0){
    suma += numero;
    contador++;
  }
  console.log(suma);
  console.log(contador);
  
} while (numero >= 0);

console.log("La sumatoria es: " + suma);
console.log("La media es: " + (suma/contador));