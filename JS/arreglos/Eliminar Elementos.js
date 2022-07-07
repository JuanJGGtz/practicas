//Eliminar el ULTIMO elemento
//.pop


//Si asignamos el método a una variable, obtendremos su valor
let array = ['I',2,'tres','IV',5];
let ultimoElmento = array.pop();//Eliminamos el UTLIMO elemento y lo guardamos en "ultimoElmento"
console.log("ultimoElmento>>",ultimoElmento);
console.log("Nuevo array>>",array);



//Eliminar el PRIMER elemento
//.shift
//Si asignamos el método a una variable, obtendremos su valor
let primerElemento = array.shift();//Eliminamos el PRIMER elemento y lo guardamos en "primerElemento"
console.log("primerElemento>>",primerElemento);
//console.log("Nuevo array>>",array);

function popShift(arr) {
    let popped = arr.pop(); //
    
    let shifted = arr.shift(); //
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));