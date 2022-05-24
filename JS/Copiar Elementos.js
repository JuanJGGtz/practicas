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
const numeros = ['uno','II','III',4];
const numeroRomanos = numeros.slice(1,3);//-> OJO con el ultimo elemento a tomar
console.log('numeroRomanos :>> ', numeroRomanos);

//COPIAR ARREGLO
const num = [1,2,3,4,5];

const copiaSlice = num.slice();


const copiasinSlice = num;
copiaSlice.pop();
console.log('copiaSlice :>> ', copiaSlice);
console.log('copiasinSlice :>> ', copiasinSlice);
console.log('num :>> ', num);

