/**
 * Este metodo itera sobre todos los elementos del array y regresa un solo valor
 * 
 * let value = arr.reduce(function(accumulator, item, index, array) {
 *    ...
 *  }, [initial]);
 * https://es.javascript.info/array-methods#indexof-lastindexof-e-includes:~:text=El%20flujo%20de%20c%C3%A1lculos%3A
 */

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log('result :>> ', result);

