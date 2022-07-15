/**
 * Escribe la función camelize(str) que convierta palabras separadas por guión como “mi-cadena-corta”
 *  en palabras con mayúscula “miCadenaCorta”.
 * Esto sería: remover todos los guiones y que cada palabra después de un guión comience con mayúscula.
 * Ejemplos: 
 * camelize("background-color") == 'backgroundColor';
 * camelize("list-style-image") == 'listStyleImage';
 * camelize("-webkit-transition") == 'WebkitTransition';
 */


/* function camelize(str){
    let arr = str.split("");
    console.log('arr :>> ', arr);
    while(arr.findIndex(element => element == "-")){
        let index = arr.findIndex(element => element == "-");
        arr.splice(index,1);
    }
    return arr;
} */

/* function camelize(str){
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "-") {
            i++;
            newStr += str[i].toUpperCase();
        }else{
            newStr += str[i];
        }
    }

    return newStr;
} */

function camelize(str) {
    return str
        .split('-') // separa 'my-long-word' en el array ['my', 'long', 'word']
        .map(
            // convierte en mayúscula todas las primeras letras de los elementos del array excepto por el primero
            // convierte ['my', 'long', 'word'] en ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // une ['my', 'Long', 'Word'] en 'myLongWord'
}

console.log('camelize() :>> ', camelize("background-color"));
console.log('camelize() :>> ', camelize("list-style-image"));
console.log('camelize() :>> ', camelize("-webkit-transition"));