'use strict'


function calculadora(){
  var numero1 = parseInt(prompt("Introduce el primer numero"));
  var numero2 = parseInt(prompt("Introduce el segundo numero"));

  while (isNaN(numero1)) {
    numero1 = parseInt(prompt("Introduce el primer numero"));
  }
  while (isNaN(numero2)) {
    numero2 = parseInt(prompt("Introduce el segundo numero"));
  }

  var suma = numero1 + numero2,
      resta = numero1 - numero2,
      multiplicacion = numero1 * numero2,
      division = numero1/numero2,
      modulo = numero1%numero2;

  document.write("numero 1: " + numero1 + "<br>");
  document.write("numero 2: " + numero2 + "<br>");
  document.write("Suma: " +  suma + "<br>");
  document.write("Resta: " +  resta + "<br>");
  document.write("Multiplicación: " + multiplicacion + "<br>");
  document.write("División entera: " + division + "<br>");
  document.write("Modulo: " + modulo + "<br>");

  console.log("numero 1: " + numero1);
  console.log("numero 2: " + numero2);
  console.log("Suma: " +  suma);
  console.log("Resta: " +  resta);
  console.log("Multiplicación: " + multiplicacion);
  console.log("División entera: " + division);
  console.log("Modulo: " + modulo);
}

function calculadora2(numero1, numero2){
  var suma = numero1 + numero2,
      resta = numero1 - numero2,
      multiplicacion = numero1 * numero2,
      division = numero1/numero2,
      modulo = numero1%numero2;

  document.write("numero 1: " + numero1 + "<br>");
  document.write("numero 2: " + numero2 + "<br>");
  document.write("Suma: " +  suma + "<br>");
  document.write("Resta: " +  resta + "<br>");
  document.write("Multiplicación: " + multiplicacion + "<br>");
  document.write("División entera: " + division + "<br>");
  document.write("Modulo: " + modulo + "<br>");

  console.log("numero 1: " + numero1);
  console.log("numero 2: " + numero2);
  console.log("Suma: " +  suma);
  console.log("Resta: " +  resta);
  console.log("Multiplicación: " + multiplicacion);
  console.log("División entera: " + division);
  console.log("Modulo: " + modulo);
}

for (let i = 1; i <= 10; i++) {
  calculadora2(i, 8);
  document.write("*********************<br>")
}