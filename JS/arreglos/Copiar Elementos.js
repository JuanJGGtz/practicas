/**
 *  .slice()
 * Este método COPIA o EXTRAE un número determinado de elemntos de un arreglo a un NUEVO ARREGLO
 * USA DOS PARAMETROS
 * .slice(posicionInicial, posicionFinal + 1); -> NO SE TOMA EN CUENTA EL ELEMENTO DE LA POSICIÓN FINAL
 */


/**
 * slice()
 *slice(start)
 *slice(start, end)
 */
//COPIAR UN GRUPO DE ELEMENTOS
const numeros = ['uno', 'II', 'III', 4];
const numeroRomanos = numeros.slice(1, 3);//-> OJO con el ultimo elemento a tomar
console.log('numeroRomanos :>> ', numeroRomanos);

//COPIAR ARREGLO
const num = [1, 2, 3, 4, 5];

const copiaSlice = num.slice();


const copiasinSlice = num;
copiaSlice.pop();
console.log('copiaSlice :>> ', copiaSlice);
console.log('copiasinSlice :>> ', copiasinSlice);
console.log('num :>> ', num);

const x = [2, 3];
const y = x;

const z = x.slice();

console.log('x :>> ', x);
console.log('y :>> ', y);
console.log('z :>> ', z);


if (x === z) {
    console.log('X == Z');
} else {
    console.log('Por referencia X es != Z');
}
for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        console.log("#");
    } else {
        console.log("\n");
    }
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            console.log("#");
        } else {
            console.log("\n");
        }

    }

}
