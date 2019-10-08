//Swicth
'use strict'

var edad = 25,
    imprime = "";

    switch (edad) {
      case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
      case 25:
        imprime = "Ya eres un adulto";
        break;
      case 40:
        imprime = "Una persona grande";
        break;
      default:
        imprime = "menor de 18";
        break;
    }
    console.log(imprime);