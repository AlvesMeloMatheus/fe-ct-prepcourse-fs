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

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = "";
   var minus = "";
     for (var i = 0; i < string.length; i++) {
       if (string[i].toUpperCase()===string[i]) {
         mayus += string[i];          
     } else {
       minus += string[i];
     }
   }
   return mayus + minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var res = "";
   var strNuevo = frase.split (" ");
   for (i = 0; i < strNuevo.length; i++) {
     res += strNuevo[i].split("").reverse().join("");
     if (i !== strNuevo.length - 1) {
       res += " ";
     } 
   }
   return res;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var res= "Es capicua";
   var str = numero.toString();
   for (var i = 0; i < str.length; i++) {
     if (str[i]!==str[str.length-1-i]) {
       res = "No es capicua";
     }
   }
   return res;
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var cadenaNueva = string.split("a").join('').split("b").join('').split("c").join('');
   return cadenaNueva;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort(function(a, b) {
      //Los queremos ordenados del mas corto al mas largo, por lo tanto usamos...
      return a.length - b.length;
      //En caso contrario, usariamos return b.length - a.length
    });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArray = [];
   for (var i = 0; i < array1.length; i++) {
     for (var o = 0; o < array2.length; o++) {
       if (array1[i]===array2[o]) {
         nuevoArray.push(array1[i]);
       }
     }
   }
   return nuevoArray;  
}

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
