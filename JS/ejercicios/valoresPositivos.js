/***
 * Dado un array devolver un array valores verdaderos
 * 
 * Rebote falsy
 * Quita todos los valores falsos de un arreglo.
 * Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.
 * Sugerencia: Intenta convertir cada valor a booleano.
 * 
 * bouncer([7, "ate", "", false, 9]) debe devolver [7, "ate", 9].
 * bouncer(["a", "b", "c"]) debe devolver ["a", "b", "c"].
 * bouncer([false, null, 0, NaN, undefined, ""]) debe devolver [].
 * bouncer([null, NaN, 1, 2, undefined]) debe devolver [1, 2].
 * 
 */

function bouncer(arr) {
    const newArr = arr.filter(function (element) {
        if (element) {
            return element;
        }
    });
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));


/* function bouncer(arr) {
    return arr.filter(Boolean);
} */
