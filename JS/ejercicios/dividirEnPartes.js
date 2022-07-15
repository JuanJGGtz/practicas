/**
 * Escribe una función que divida un arreglo (primer argumento) 
 * en grupos de la longitud size (segundo argumento) y los devuelva como 
 * un arreglo bidimensional.
 */

//chunkArrayInGroups(["a", "b", "c", "d"], 2) debe devolver [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) debe devolver [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) debe devolver [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) debe devolver [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) debe devolver [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) debe devolver [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) debe devolver [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

function chunkArrayInGroups(arr, size) {
    if (size > 0) {
        let count = Math.ceil(arr.length / size);
        const newArr = [];

        let j = 0;
        let newSize = size;

        for (let i = 0; i < count; i++) {

            newArr.push(arr.slice(j, newSize));

            j = newSize;
            newSize += size;
        }
        return newArr;
    }
    return 0;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));