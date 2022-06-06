/**
 * forEach: permite ejecutar una función pa cada elemento de un array
 * Se ocupa en: MATIRCES
 */


//OBJETOS
const personas = [
    {
        name: 'Juan',
        lastName: 'Gamboa',
        age: 25,
        height: 1.80,
        weight: 90,
        'correo electronico': 'juan@gmail.com'
    },
    {
        name: 'Eduardo',
        lastName: 'Gamboa',
        age: 10,
        height: 1.60,
        weight: 50,
        'correo electronico': 'eduard@gmail.com'
    }
];

//console.log('personas :>> ', personas[1]['correo electronico']);

//forEach -> MATRICES DE OBJETOS
// ITEM -> Devolvemos el ELEMENTO ACTUAL de cada objeto dentro de la matriz
// INDEX -> Devolvemos el INDICE sobre la que estamos
// ARRAY -> Devolvemos el arreglo en sí
/* personas.forEach((item , index , array) => {
    console.log('item/index/Array :>> ', item["correo electronico"],index,array);
}); */

personas.forEach((item , index , array) => {
    console.log('Nombre %s, Correo: %s',item.name,item["correo electronico"]);
});


const vocales = ['a','b','c'];

vocales.forEach(console.log);

