/**
 * Copia y ordena un array
 */

let arr = ["HTML", "JavaScript", "CSS"];

/* function copySorted(arr) {
    return arr.slice().sort((itemA,itemB) => itemA.localeCompare(itemB));
} */

const copySorted = arr => arr.slice().sort((itemA, itemB) => itemA.localeCompare(itemB));
let sorted = copySorted(arr);



console.log(`Nuevo Array: ${sorted}`);
console.log(`Array: ${arr}`);
