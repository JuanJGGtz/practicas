/**
 * 
 * Nos permite recorrer un arreglo y aplicar una función sobre cada uno de ellos
 * 
 *  Donde devolvemos un array con un elemento elevado al cuadrado
 * let result = arr.map( function(elementoA){
 *  return elementoA ** 2; // retorna el elemento elevado al cuadrado
 * });
 * 
 * let result = arr.map( elemntoA => elementoA ** 2 );
 * 
 * 
 */

const arr = [5, 10, 6];

function potencia(arr,pot) {
    //Metodo 1
    /* let result = arr.map(function (elementoA) {
        return elementoA ** pot; // retorna el elemento elevado al cuadrado
    });
    return result; */

    //Metodo 2
    return arr.map( elemntoA => elemntoA ** pot);
}
console.log('Array Original: ',arr);
console.log('Array elevado a una potencia: ',potencia(arr,3));

