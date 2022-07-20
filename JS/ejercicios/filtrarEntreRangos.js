/**
 * Escribe una función filterRange(arr, a, b) que obtenga un array arr, 
 * busque los elementos con valor mayor o igual a a y menor o igual a b y devuelva un array con los resultados.
 */

let arr = [5, 3, 8, 1, 9, 10, 20, 23, 2];
function filterRange(arr, num1, num2) {
    return arr.filter(item => (item >= num1 && item <= num2)).sort((a, b) => (a - b));
}

//console.log(' :>> ', arr.filter(item => item >= 1 && item <= 4));

console.log(filterRange(arr, 1, 5));