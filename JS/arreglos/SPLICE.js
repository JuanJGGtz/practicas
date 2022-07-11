/**
 * != .splice()
 * ELIMINA, AÑADE un elemento de una POSICIÓN ESPECÍFICA DE UN ELEMENTO o UN GRUPO, tambien podemos 
 * REEMPLAZAR con un nuevo valor;
 * 
 * Recibe hasta tres parametros
 *  
 * array.splice(posicion,numeroDeElementos,elementoRemplazo);
 * arr.splice(start[, deleteCount, elem1, ..., elemN])
 */

//ELIMINAR TODO A PARTIR DE UN NUMERO
const numeros = [1,2,3,4,5];
numeros.splice(3);//Eliminamos todos los elementos a partir de la posicion 3;
console.log('numeros :>> ', numeros);
//[ 1, 2, 3 ]

 const months = ['Jan', 'March', 'April', 'June'];
//AGREGAR ELMENTO
//(posición a agaregar el elemento, ¿Reemplazar?,nuevo elmento)
months.splice(1,0,'Feb');//Estamos agregando un lemento en la posicion 1, sin remplazar el actual
console.log('months AGREGAR :>> ', months);

//REMPLAZAR ELEMENTO
months.splice(4,1,'May');
console.log('months REMPLAZAR :>> ', months);


//ELIMINAR ELEMENTO/S
months.splice(2,1);//Eliminamos elemento de la posicion 2
console.log('months ELIMINAR :>> ', months);
let firstTwoMonths = months.splice(0,2);
console.log('months ELIMINAR GRUPO DE ELEMENTO:>> ', months);
console.log('Primeros dos Meses:>> ', firstTwoMonths);

firstTwoMonths.splice(1,0,'UNO',2,'III')
console.log('AGREGAR VARIOS ELEMENTOS ', firstTwoMonths);//AGREGAMOS VARIOS ELEMENTOS EN LA POSICIÓN DADA
//[ 'Jan', 'UNO', 2, 'III', 'Feb' ]

//Remover el penultimo elemento;
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)
console.log('removed :>> ', removed);