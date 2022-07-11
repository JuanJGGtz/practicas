/**
 * !Es un metodo que ordena basandose en su valor UNICODE!
 * Es necesario que reciba una función de comparación que ordene los elementos
 * 
 * arr.sort([compareFunction]);
 * 
 * Función de comparación compareFunction
 * #NUMEROS:
 * Se compara el elementoA vs elementoB
 * SI
 *      elementoA < elementoB => -1
 *      elementoA > elementoB =>  1
 *      elementoA = elementoB =>  0
 * 
 * array.sort(function(elementoA,elementoB){
 *  return elementoA - elementoB;
 * });
 * 
 * #CARACTERES:
 * Se utiliza un metodo adicional => localeCompare()
 * Se compara el elementoA vs elementoB
 * 
 * array.sort(function(elementoA,elementoB){
 *  return elementoA.localeCompare(elementoB);
 * });
 * 
 * 
 * UNICODE : https://unicode-table.com/es/
 * STRINGS: Se ordenan tieniendo como prioridad los caracteres en MAYUSCULA 
 * NUMEROS: los numeros que empiezan con 1 tienen prioridad
 */

//NUMEROS:
let arr = ['80', '9', '700', 40, 1, 5, 200];

function ordenar(arr) {

    //Forma 1: Función Anonima
    /* let newArray = arr.sort(function(a,b){
        return a-b;
    }); */

    //Forma 2: Usando una función
    /* let newArray = arr.sort(compareFunction); */

    //Forma 3: Arrow Function
    let newArray = arr.sort( (a,b) => a - b );

    return newArray;
}

//forma2
function compareFunction(a,b) {
    return a-b;
}

console.log(ordenar(arr));

//Ejercicio 
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
getIndexToIns(arr, '700');