/* Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función. 

frankenSplice([1, 2, 3], [4, 5], 1) debe devolver [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) debe devolver ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) debe devolver 
            ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
frankenSplice([1, 2, 3, 4], [], 0) debe devolver [1, 2, 3, 4]
*/

function frankenSplice(arr1, arr2, n) {

    console.log('arreglo1;', arr1);
    console.log('arreglo2;', arr2);
    console.log('n:', n);

    let parte1 = arr2.slice(0, n);
    let parte2 = arr2.slice(-n);
    let newArr = parte1.concat(arr1, parte2);

    return newArr;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));