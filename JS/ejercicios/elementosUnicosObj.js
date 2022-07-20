/**
 * Partiendo del array arr
 * Crea una función unique(arr) que devuelva un array con los elementos 
 * que se encuentran una sola vez dentro de arr.
 */

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.findIndex(item => item == arr[i]) < 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/* function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
} */

console.log('strings :>> ', strings);
console.log('unique(strings) :>> ', unique(strings));