/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   // Math.pow(num, exponent)
   // num**exponent
   // return num ** 2
   return Math.pow(num, 2);
}
console.log(elevarAlCuadrado(2));

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return Math.pow(num, 3)
}
console.log(elevarAlCubo(3))

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return Math.pow(num, exponent);
}
console.log(elevar(2, 4));

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);
}
console.log(redondearNumero(2.5));// 0.5 hasta 0.99999 -> el numero mas cercano hacia arriba
console.log(redondearNumero(2.4));// 0.4 hacia 0.000001 -> el numero entero mas cercano hacia abajo

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);

   // Math.floor(num) // resulta entero mas cercano pero hacia abajo
}
console.log(redondearHaciaArriba(0.000000000001));

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random();
}
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
