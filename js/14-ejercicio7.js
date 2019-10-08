'use strict'

// var numero = parseInt(prompt("Introduce un numero"));

// while (isNaN(numero)) {
//   numero = parseInt(prompt("Introduce un numero valido"));
// }
// document.write("<h2>Tabla de multiplicar de: " + numero + "</h2>")
// for (var i = 1; i <= 10; i++) {
//   document.write(i + " * " + numero + " = " + (i*numero) + "<br>");
// }

// Tablas de multiplicar 1-10

for (var i = 1; i <= 10; i++) {
  document.write("<h2>Tabla de multiplicar:" + i +"</h2>")
  for (var j = 1; j <= 10; j++) {
    document.write(i + " * " +  j + " = " + i*j + "<br>")
  }
  
}