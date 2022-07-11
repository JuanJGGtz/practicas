/**
 * 
 * Devuelve un array con los elemntos que cumplan una condicion
 * 
 * let result = arr.filter( function( element ) {
 *  
 *  return elemneto;
 *  
 * } );
 * 
 */


const arr = [-10,0,9];

let result = arr.filter( function(elemento){
    return elemento > 0;
});

console.log('Array Original :>> ', arr);
console.log('Array Resultado :>> ', result);


const calificacionesObj = [
    {id: 121, name: 'Paco' , cal : 60},
    {id: 132, name: 'Luis' , cal : 90},
    {id: 92, name: 'Fernando' , cal : 77}
];

function reprobados(objData,calMinima) {
    //Forma 1
    /* let result = objData.filter( function(element){
        return element.cal < calMinima;
    });
    return result; */
    //Forma 2
    return objData.filter( elemento => elemento.cal < calMinima );
}

console.log('Alumnos reprobados :>> ', reprobados(calificacionesObj,80));