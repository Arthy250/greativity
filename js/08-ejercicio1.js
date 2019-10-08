'use strict'
//ejercicio 1

var numero1 = parseInt(prompt('ingresa un numero', 0)),
    numero2 = parseInt(prompt('ingresa otro numero', 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ) {
    numero1 = parseInt(prompt("ingresa un numero", 0)),
    numero2 = parseInt(prompt("ingresa otro numero", 0));
}

if (numero1 < numero2) {
  console.log(numero2 + " es mayor que: " + numero1);
}else if(numero1 > numero2) {
  console.log(numero2 + " es mayor que: " + numero1);
} else {
  console.log(numero2 + " es igual que: " + numero1);
}