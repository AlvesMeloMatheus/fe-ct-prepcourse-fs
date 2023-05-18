// ----------- if() {} else if {} else {} ---------------

// else if (tiene condicion) -> else {}
var x = 25
var y = 25

// && (y) -----> || (o)

function variables (x, y) {
    if (x % 1 === 0 && y % 2 === 0) {
        return "x es impar e y es par";
    } else if ( x > 20 || y > 20) {
        return "son mayores a 20";
    } else {
        return "no queria eso";
    }
}

console.log(variables(y))

// ------------------------ sin llaves
// @matheus alves

// === valor unicode   2 === "2" false            <->  == --> 2 == "2" verdadero

var m = "manzana";
var f = "frutilla";

function fruta (m, f) {
    if (m === f)  {
        return "son iguales";
    } return "son diferentes";
} 

console.log(fruta(m, f));

// diferencia if () y switch ()
// if te permite condiciones ( ------ )
// switch() casos

// ------------ switch () {case: break default: } --------------------

var l = "lechuga";
var r = "remolacha";
var c = "cebolla";
var z = "zapallito";

function ensalada (l, r, c, z) {

    var resultado;

    switch (l, r, c, z) {

        // command + k + c --> comenta
        // command + k + u --> descomenta

        //sadasdas
        case l:
            resultado = "es verde";
        break;

        case r:
            resultado = "es violeta";
        break;

        case c:
            resultado = "es blanco";
        break;

        default:
            resultado = "no me gusta el color";
    } 
    return resultado;
}



function saludo(juan) {
    return "Hola a todos, " + juan + "!";
}

console.log(saludo("pera"));

function soloNumeros(array) {
 var contenedor = [];
    for (var i = 0; i < array.length; i++) {
        
       

        var elemento = array[i]

        if( elemento % 1 === 0 ) {

            contenedor.push(elemento);
        }
    }
    return contenedor;

}

var asdfg = [12, "henry", 455555, 13];
console.log(soloNumeros(asdfg));