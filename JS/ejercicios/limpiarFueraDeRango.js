/**
 * Escribe una función filterRangeInPlace(arr, a, b) 
 * que obtenga un array arr y remueva del mismo todos los valores 
 * excepto aquellos que se encuentran entre a y b. El test es: a ≤ arr[i] ≤ b.
 */

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, num1, num2) {
    let newArr = arr.filter(item => (item < num1 || item > num2));

    for (let i = 0; i < newArr.length; i++) {
        let index = arr.findIndex(item => item == newArr[i]);
        arr.splice(index,1);
    }

    return arr;
}
console.log('arr :>> ', arr);
console.log('filterRangeInPlace', filterRangeInPlace(arr, 1, 4));