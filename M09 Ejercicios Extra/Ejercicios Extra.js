/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var arrayGlobal = [];
   for (var clave in objeto) {
     var arrayObjeto = [];
     arrayObjeto.push(clave);
     arrayObjeto.push(objeto[clave]); 
     arrayGlobal.push(arrayObjeto);
   }
   return arrayGlobal;

   /*
   var array = [];
   var keys = Object.keys(objeto);
   for (var i = 0; i < key.length; i++) {
    array.push([keys[i], objeto[keys[i]]])
   }
   return array;
   */
}
var obj = {A: 169, B: 4, Z: 1};
console.log(deObjetoAarray(obj));

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objetoGlobal = {};
   var array = string.split("").sort();//que hace el sort? lo ORDENA.
   for (i = 0; i < array.length; i++) {
     if (objetoGlobal[array[i]]) {
       objetoGlobal[array[i]] += + 1// += o = objetoGlobal[array[i]]
     } else {
       objetoGlobal[array[i]] = 1
     }  
   }
   return objetoGlobal;
}
// var elStr = "asflzxklvdnkjasubcsocbjxcakdwkllaf"
// console.log(numberOfCharacters(elStr))

function capToFront(string) {// aqui
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
  var mayus = "";
  var minusc = "";
  for ( var i = 0; i < string.length; i++) {
    //toUpperCase -> seleccionar las letras en masyuscula ej: A 
    if ( string[i].toUpperCase() === string[i]) {
      mayus += string[i]
    } else {
      minusc += string[i]
    }
  }
  return mayus + minusc;

}
var eagle = "ilaAGUamericanA";
console.log(capToFront(eagle));

function asAmirror(frase) { 
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  var res = "";
  var str = frase.split(" ");
  for ( var i = 0; i < str.length; i++) {
    res += str[i].split("").reverse().join("");
    if ( i !== str.length - 1) {
      res += " ";
    }
    // i -> posicion de cada letra !==  -> str.length - 1 <- "asd" i -> 4- " " -> "asd "
  }
  return res;

}
var xd = "yo soy harry potter";
console.log(asAmirror(xd));

function capicua(numero) { // 121 , 222232222, 23532
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

  var str = numero.toString() // num === 45 num.toString()

  for ( var i = 0; i < str.length; i++) {
    if ( str[i] !== str[str.length - 1 - i]) {
      return "No es capicua";
    }
  }
  return "Es capicua";

}
var num = 12321;
var num2 = 211;
var num3 = 2115112;
console.log(capicua(num));
console.log(capicua(num2));
console.log(capicua(num3));

function deleteAbc(string) {// aqui2
  //  Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  //  Retorna el string sin estas letras.
  //  Tu código:

  var newString = string.split("a").join("").split("b").join("").split("c").join("")
  return newString;
}
var str = "abcd, efabc, caballo"
console.log(deleteAbc(str));

function sortArray(arrayOfStrings) { 
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código: array[1, 2] array.length-> 2 -> i ->> 0, 1

  // for ( var i = 0; i < arrayOfStrings.length - 1; i++) {
  //   var siguiente;
  //   for (var j = 0; j < arrayOfStrings.length -1; j++) {
  //     if ( arrayOfStrings[j].length > arrayOfStrings[j + 1].length) {

  //       siguiente = arrayOfStrings[j + 1]; 
        
  //       arrayOfStrings[j + 1] = arrayOfStrings[j]

  //       arrayOfStrings[j] = siguiente
  //     }
  //   }
  // }
  // return arrayOfStrings
  // ["hell", "asd","tiger", "war"] -> ["asd", "hell", "tiger", "war"] -> ["asd", "hell", "war", "tiger"] -> ["asd", "war", "hell", "tiger"]
  return arrayOfStrings.sort(function (a, b) {
    return (a.length - b.length)
  })
    
}
var asd = ["You", "hell","are", "warrior", "beautiful", "looking"]
console.log(sortArray(asd));

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    for (var z = 0; z < array2.length; z++) {
      if ( array1[i] === array2[z]) {
        newArray.push(array1[i])
      }
    }
  }
  return newArray;
}
var what = [42, 2, 69, "asd", "3#", undefined];
var que = [356, 45, 789, 2, 456, 69, "asd", undefined];
console.log(buscoInterseccion(what, que));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
