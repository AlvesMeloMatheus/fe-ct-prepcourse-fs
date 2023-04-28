/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   // var res;
   // if ( x === y ) {
   //    res = true
   // } else {
   //    res = false
   // }
   return x === y;
}
console.log(sonIguales(14,14));

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   // cadena1 = 'asd'
   // cadena2 = 'asdf'

   // if ( str1.length === str2.length) {
   //    return true;
   // } return false;

   return str1.length === str2.length;
}
var str1 = 'asd'
console.log(str1.length);


function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   return num < 90;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return num > 50;
}
console.log(mayorQueCincuenta(49));
console.log(mayorQueCincuenta(51));

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   /*
   20 |_2
   0   10

   13 |_2
   1   6    
   */
  return num % 2 === 0;
}
console.log(esPar(13));
console.log(esPar(500));

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   /*
   20 |_2
   0   10

   21 |_2
   1   10    
   */
  // === -> es igual
  // !== -> no es igual
  return num % 2 !== 0;
}
console.log(esImpar(79));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
