/**
 * Devuelve TRUE si si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo
 * de lo contrario devueve FALSE
 */
function mutation(arr) {
    let arr1 = arr[0].toLowerCase();
    let arr2 = arr[1].toLowerCase();

    for (let i = 0; i < arr2.length; i++) {
        //Se reestablece el valor de false
        let flag = false;
        let letra = arr2[i];
        for (let j = 0; j < arr1.length; j++) {
            if (letra == arr1[j]) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            return false;
        }
    }

    return true;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
//mutation(["hello", "neo"]) debe devolver false.
//mutation(["voodoo", "no"]) debe devolver false.
//mutation(["ate", "date"]) debe devolver false.
//mutation(["Tiger", "Zebra"]) debe devolver false.
//mutation(["Noel", "Ole"]) debe devolver true.