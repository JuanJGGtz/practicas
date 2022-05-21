//Los arreglos son mutables es decir (Se le pueden agregar o quitar elemntos)
/**
 *  AGREGAR UNO O MAS ELEMENTOS AL FINAL
 *  .PUSH 
 *  array.push(elemt)
 */

//Sintaxis arr.push(element1[, ...[, elementN]]);

let secuenciaNumeros = [1,'dos','III'];
let masNumeros = [4,'V','seis'];

secuenciaNumeros.push(masNumeros);//Agregamos el ARRAY "masNumeros" como un elemento más
//[ 1, 'dos', 'III', [ 4, 'V', 'seis' ] ]

secuenciaNumeros.push('VII');//Agregamos "VII" como un elemento mas
//[ 1, 'dos', 'III', [ 4, 'V', 'seis' ], 'VII' ]

console.log(secuenciaNumeros);//Devuelve el total de elementos 4

/**
 *  AGREGAR UNO O MAS ELEMENTOS AL INICIO
 *  .PUSH 
 *  array.unshift(elemt)
 */

 const array1 = [1, 2, 3];

 console.log(array1.unshift(4, 5));//Al imprimir la funcion me da el nuevo total de elementos
 // expected output: 5
 
 console.log(array1);
 // expected output: Array [4, 5, 1, 2, 3]