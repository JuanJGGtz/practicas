/**
 * find
 * Este metodo nos puede ayudar a encontrar el PRIMER elemento que cumpla con alguna condición específica 
 * 
 */

const arr = [10, 9, 34, 34, 34, 45, 67, 2, 23, 3, 5];

let elemento = arr.find(function (params) {
    return params > 20;
});


/**
 * findIdex
 * Este metodo nos puede ayudar a encontrar el INDICE DEL PRIMER elemento que cumpla con alguna condición específica 
 * 
 */
let elementoIndex = arr.findIndex(params => params > 20);

console.log('arr :>> ', arr);
console.log('Elemento: ',elemento);
console.log('Elemento Indice: ',elementoIndex);