/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
   class Usuario {
      constructor (usuario, nombre, email, password) {
         this.usuario= usuario;
         this.nombre= nombre;
         this.email= email;
         this.password= password;
      }
      saludar() {
         return "Hola, mi nombre es " + this.nombre;
      }
   }
   return Usuario;
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Usuario.prototype.saludar = function () {
      return "Hello World!"
   }
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   String.prototype.reverse = function () {

      var stringInvertido= this
      stringInvertido= [...this].reverse().join('');
      return stringInvertido

      var str = 'Asuka';
/*

Array.prototype.mayorQueTres = function () {
   var arregloModificado = [];                  // se crea un arreglo vacio que contendrá losdatos modificados del arreglo que invoca el metodo
   for (var i = 0; i < this.length; i++) {
      	if (this[ i ] > 3) {
         		arregloModificado.push(false);      // si el valor es mayor a 3 se pushea un false en el nuevo arreglo
     	 } else {
        		 arregloModificado.push(this[ i ]); // si el avlor no es mayora 3 entonces se pushe el valor al nuevo arreglo
     	 }
   }
   return arregloModificado;        // retorna el arreglo con los cambio es decir que contiene false en as casillas cuyo valor era mayor a 3
};
 
*/





   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
