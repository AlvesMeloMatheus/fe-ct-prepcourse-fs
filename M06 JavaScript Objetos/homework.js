/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var newGato = {
      nombre,
      edad,
      meow: () => {
         return "Meow!"
      }
   }
   return newGato;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var newObj = {
      nombre,
      email,
      password,
   }
   return newObj;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) { // -5°
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var res = 0;
   res = objetoMisterioso.numeroMisterioso * 5;
   return res;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad]
   return objeto;

}

function tieneEmail(objetoUsuario) { 
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if ( objetoUsuario['email']) {
      return true;
   } else {
      return false;
   }

}
var obj = {email: null}
console.log(tieneEmail(obj))

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objeto[propiedad]) {
      return true;
   } else {
      return false;
   }
}
var obj = {propiedad: "asd"}
console.log(tienePropiedad(obj, "propiedad"))

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if( objetoUsuario['password'] === password) {
      return true;
   } else {
      return false;
   }

}


function actualizarPassword(objetoUsuario, nuevaPassword) { // -10°
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;

}
// var obj = {password: "asdzxcfgghhhhh...."}
// console.log(actualizarPassword(obj, "asdasd"))

function agregarAmigo(objetoUsuario, nuevoAmigo) { // 11° - aqui
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo)
   return objetoUsuario;

}
var obj = {amigos: []}
console.log(agregarAmigo(obj, "marcos"))
console.log(agregarAmigo(obj, "pedro"))

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;

}
var usuarios = [{esPremium: false}, {esPremium: false}, {esPremium: false}]
console.log(usuarios[0].esPremium);
console.log(pasarUsuarioAPremium(usuarios))

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   // objetoUsuario.posts = [ Npost.likes = numero ]
   var sumar = 0;
   for ( var i = 0; i < objetoUsuario.posts.length; i++) {
      sumar += objetoUsuario.posts[i].likes;
   }
   return sumar;

}
var obj ={ posts: [ {id: '1', title: 'Aventuras en JS!', likes: 10,},

                     { id: '2', title: 'Soy Henry!', likes: 100,},

                     {id: '3', title: 'Qué es un JavaScript?', likes: 35,}  
                  ]
         }
console.log(sumarLikesDeUsuario(obj));

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".

   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.

   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto["calcularPrecioDescuento"] = () => {
      return objetoProducto.precio - objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
   }
   return objetoProducto;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
