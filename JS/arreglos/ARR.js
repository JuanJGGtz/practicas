//Un arreglo en JS es un objeto Global
/**
 * STRINGS => "Hola Mundo",
 * NUMBER => 3213
 * BOOLEAN => TRUE|FALSE
 * OBJETOS => {
 *              propiedad : value,
 *              "otra propiedad": value
 *              }
 * 
 */

//¿Cómo se crea un array?
let array = [];
// Devuelve []
//console.log('array :>> ', array);
// Devuelve 'object'
//console.log('typeof(array) :>> ', typeof(array));
//ARRAY con valores
let array2 = [
    [1,2,true],
    "Cadenas de texto",
    7445074144,
    true,
    {
        strings : "Hola Mundos",
        numeros : 7445079123,
        boolean : false,
        "otro objeto" : {
            a : 1,
            b :10
        },
    }
];


console.log('Posición 0 :>> ', array2[0]);
//console.log('typeof de la Posición 3 :>> ', typeof(array2[3]));
//console.log('array2 :>> ', typeof(array2[3].boolean));
console.log('Propiedades con espacios :>> ', array2[4]["otro objeto"]);
console.log('Propiedades con espacios :>> ', array2[4]["otro objeto"].b);




