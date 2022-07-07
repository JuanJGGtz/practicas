/**
 *  join(), similar al toString() 
 * Este metodo combina todos los elementos de un arreglo en una cadena, 
 * como parametro se le asigna el caracter por el cual estaran delimitados los elementos en el
 * string
 * 
 * colores = ['verde','rojo','amarillo'] => "verde-rojo-amarillo"
 */

const colores = ['verde','rojo','azul'];

console.log("JOIN" , colores.join(';'));