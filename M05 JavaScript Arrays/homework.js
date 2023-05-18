/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];

   // return array.shift();
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:   
   return array[array.length - 1];

   // return array.push();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:   
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var array2 = [];
   for(var i = 0; i < array.length; i++) {
      array2[i] = array[i] + 1;
   }
   return array2;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {// -7
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   for ( var i = 0; array.length > i; i++) {
      if (array[i] === elemento) {
         return true;
      }
   }
   return false;
   
   // o -----> metodo .includes() <------
   // if (array.includes(elemento)) {
   //    return true;
   // } else {
   //    return false;
   // }
   
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   
   var suma = 0;
   for (var i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i];
   }
   return suma;

   // o for --( of )
   // var suma = 0;
   // for(var i of arrayOfNums) {
   //    suma += i;
   // }
   // return suma;

   // o .forEach()
   // var suma = 0;
   // arrayOfNums.forEach(function(i) {
   //    suma += i;
   // })
   // return suma;

   // o .reduce() -->
   // var final = 0;
   // var suma = arrayOfNums.reduce((acc, value) => acc + value, final);
   // return suma;

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   var nEstudiantes = resultadosTest.length;
   for (var i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];
   }
   return suma / nEstudiantes;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   
   // var max = arrayOfNums[0];
   // for(var i = 1; i < arrayOfNums.length; i++) {
   //    if(arrayOfNums[i] > max) {
   //       max = arrayOfNums[i];
   //    }
   // }
   // return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   if(arguments.length < 1) return 0;
   var total = 1;
   for(var i = 0; i < arguments.length; i++) {
     total *= arguments[i];
   }
   return total;

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cantidad = 0;
   for (let i = 0; i < array.length; i++) {
      if(array[i] > 18) {
         cantidad ++;
      }
   }
   return cantidad;

}

function diaDeLaSemana(numeroDeDia) { // ------ 14 ---------
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var res = "";
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      res = "Es fin de semana";
   } else {
      res = "Es dia laboral";
   }
   return res;

   // o switch()
   // var res = ""
   // switch (numeroDeDia) {
      
   //    case 1:
   //    case 7:
   //       res = "Es fin de semana";
   //       break;
   
   //    default:
   //       res = "Es dia laboral";      
   // }
   // return res;
}

function empiezaConNueve(num) { // AQUI
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var str = num.toString(); // otString(12) -> "12"
   return str[0] === '9'
}
// [1, 1, 2] // 0, 1 ,2
console.log(empiezaConNueve(81));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (var i = 0; i < array.length -1; i++) {
      if(array[i] !== array[i +1]) {
         return false;
      }
   }
   return true;

}
arrayN = [ 1, 1, 2 ,3] // i -> 0 -> num1 | i+ 1 -> 1 num2
arrayN2 = [ 1 , 1 ]
console.log(todosIguales(arrayN2)); 

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arrayN = [];
   for( var i =0; i < array.length; i++) { // [ 1, 2 , 3 , 4(abril), ....]
      if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         arrayN.push(array[i])
      }
   }

   if (arrayN.length < 3) {
      return "No se encontraron los meses pedidos";
   } else {
      return arrayN;
   }
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla6 = [];
   for( var i = 0; i < 11; i++) { // 1, 2 -> 10
      tabla6[i] = 6*i
   }
   return tabla6;

}
console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arrayN = [];
   for (var i = 0; i < array.length; i++) {
      if ( array[i] > 100) {
         arrayN.push(array[i]);
      }
   }
   return arrayN;

}
array2 = [ 120, 35, 450]
console.log(mayorACien(array2));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.

   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".

   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arrayN = [];
   var suma = num;
   for ( var i = 0; i < 10; i++) {
      suma = suma + 2 // suma += 2

      if(suma === i) break; // 
      else {
         arrayN.push(suma)
      }
   }
    if ( i < 10) {
      return "Se interrumpió la ejecución"
    } else {
      return arrayN;
    }

}
console.log(breakStatement(-2)); 
// -2(0) i(0) +2 =0 

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.

   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.

   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arrayN = [];
   var suma = num;
   for ( var i = 0; i < 10; i++) {

      if ( i === 5) continue; // 
      else {
         suma += 2
         arrayN.push(suma);
      }

   }
   return arrayN;

}
// console.log(continueStatement(0)) // 20 -> 18


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
