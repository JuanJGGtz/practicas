/***
 * 
 * Dado dos argumentos, (array, numero)
 * 1.- Agregar el numero al array 
 * 2.- Ordenar el array
 * 3.- Devolver el indice del numero
 * 
 * PUSH() , SORT()
*/

function getIndexToIns(arr, num) {
    arr.push(num);
    console.log('array original:', arr);
    let index = arr.sort((itemA, itemB) => itemA - itemB).indexOf(num);
    console.log('array Ordenado:', arr);
    console.log('Index: ',index);

    return index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));


/*
 TEST 
 */

getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 31);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);