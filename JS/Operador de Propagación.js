/**
 * Con .slice() podemos copiar un arreglo y elementos específicos, 
 * pero tambien podemos hacerlo con el operador de propagacion [...]
 * 
 */

const numeros = [1, 2, 3, 4, 5];
const copiaNumeros = [...numeros];
const copiaNumerosSlice = numeros.slice();
const copiaIncorrecta = numeros;
numeros.pop();
console.log('copiaNumeros :>> ', copiaNumeros);
console.log('copiaNumerosSlice :>> ', copiaNumerosSlice);
console.log('copiaIncorrecta :>> ', copiaIncorrecta);//Si se modifica el arreglo original tambien cambia el array en sus copias


//Copia un array n veces 
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Cambia solo el código debajo de esta línea
        newArr.push([...arr]);
        // Cambia solo el código encima de esta línea
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));


let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', 'coriander'];

//thisArray.splice(1,0,thatArray)
//console.log('thisArray 1 :>> ', thisArray);

//CONVIRTIENDO ARRAY A STRING
//thisArray += [...thatArray];
//console.log('thisArray :>> ', thisArray);

/**
 * COMBINAR ARRAYS
 */

const merge = [...thatArray,...thisArray];

console.log('merge :>> ', merge);
