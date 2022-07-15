/**
 * !Es un metodo que ordena basandose en su valor UNICODE!
 * Es necesario que reciba una función de comparación que ordene los elementos
 * 
 * arr.sort([compareFunction]);
 * 
 * Función de comparación compareFunction
 * #NUMEROS:
 * Se compara el elementoA vs elementoB
 * SI
 *      elementoA < elementoB => -1
 *      elementoA > elementoB =>  1
 *      elementoA = elementoB =>  0
 * 
 * array.sort(function(elementoA,elementoB){
 *  return elementoA - elementoB;
 * });
 * 
 * #CARACTERES:
 * Se utiliza un metodo adicional => localeCompare()
 * Se compara el elementoA vs elementoB
 * 
 * array.sort(function(elementoA,elementoB){
 *  return elementoA.localeCompare(elementoB);
 * });
 * 
 * 
 * UNICODE : https://unicode-table.com/es/
 * STRINGS: Se ordenan tieniendo como prioridad los caracteres en MAYUSCULA 
 * NUMEROS: los numeros que empiezan con 1 tienen prioridad
 */

//NUMEROS:
let arr = ['80', '9', '700', 40, 1, 5, 200];

function ordenar(arr) {

    //Forma 1: Función Anonima
    /* let newArray = arr.sort(function(a,b){
        return a-b;
    }); */

    //Forma 2: Usando una función
    /* let newArray = arr.sort(compareFunction); */

    //Forma 3: Arrow Function
    let newArray = arr.sort((a, b) => a - b);

    return newArray;
}

//forma2
function compareFunction(a, b) {
    return a - b;
}

console.log(ordenar(arr));

// STRING en un OBJETO
const data = [{ "key": "257", "variable": "soporte", "variable2": "abi@pigknows.com" }, { "key": "259", "variable": "gcm", "variable2": "" }, { "key": "260", "variable": "tom", "variable2": "tomkarkutt@ecomtrading.com" }, { "key": "261", "variable": "srosales", "variable2": "" }, { "key": "402", "variable": "tomS", "variable2": "tom.clark@pigknows.com" }, { "key": "647", "variable": "jmonsivais", "variable2": "jose.monsivais@pigknows.com" }, { "key": "987", "variable": "vochoa", "variable2": "vmochoa@ecomtrading.com" }, { "key": "988", "variable": "nanders", "variable2": "nanders@smithfield.com" }, { "key": "989", "variable": "ztecpa", "variable2": "ztecpa@ecomtrading.com" }, { "key": "990", "variable": "mmunoz", "variable2": "mmunoz@altosano.com" }, { "key": "991", "variable": "atorres", "variable2": "atorres@ecomtrading.com" }, { "key": "992", "variable": "hreyes", "variable2": "hreyes@ecomtrading.com" }, { "key": "994", "variable": "jgarrido", "variable2": "jgarrido@altosano.com" }, { "key": "995", "variable": "manuel.pinto", "variable2": "jpinto@ecomtrading.com" }, { "key": "996", "variable": "abanda", "variable2": "abanda@ecomtrading.com" }, { "key": "997", "variable": "jruiz", "variable2": "jmruiz@ecomtrading.com" }, { "key": "998", "variable": "fmartinez", "variable2": "mvzomartinez91@gmail.com" }, { "key": "999", "variable": "nvazquez", "variable2": "nvazquez@ecomtrading.com" }, { "key": "1000", "variable": "radamaker", "variable2": "cjrdvm@iastate.edu" }, { "key": "1001", "variable": "juan_garcia", "variable2": "juan.garciag@ecomtrading.com" }, { "key": "1003", "variable": "eaguilar", "variable2": "eaguilar@ecomtrading.com" }, { "key": "1004", "variable": "vluna", "variable2": "veronica.luna@ecomtrading.com" }, { "key": "1005", "variable": "ilazaro", "variable2": "iliana.lazaro@ecomtrading.com" }, { "key": "1008", "variable": "hrivera", "variable2": "humberto.rivera@ecomtrading.com" }, { "key": "1009", "variable": "gjacome", "variable2": "german.jacome@ecomtrading.com" }, { "key": "1015", "variable": "odelrio", "variable2": "ODelRio@ecomtrading.com" }, { "key": "1016", "variable": "cgrieser", "variable2": "chad.grieser@ecomtrading.com" }, { "key": "1074", "variable": "stv", "variable2": "" }, { "key": "1380", "variable": "robertoglezalv", "variable2": "ti@pigknows.com" }, { "key": "1445", "variable": "magaly.tapia", "variable2": "mtapia@ecomtrading.com" }, { "key": "1446", "variable": "rafael.patino", "variable2": "rpatino@ecomtrading.com" }, { "key": "1447", "variable": "tito.tablada", "variable2": "ttablada@ecomtrading.com" }, { "key": "1448", "variable": "estanislao.tovilla", "variable2": "tano.tovilla@ecomtrading.com" }, { "key": "1449", "variable": "gibia.garcia", "variable2": "lgarcia@ecomtrading.com" }, { "key": "1450", "variable": "axel.vizcaya", "variable2": "axel.vizcaya@ecomtrading.com" }, { "key": "1477", "variable": "fguido", "variable2": "fguido@altosano.com" }, { "key": "1497", "variable": "aescobedo", "variable2": "aescobedo@altosano.com" }, { "key": "1525", "variable": "D.linhares", "variable2": "linhares@iastate.edu" }, { "key": "1526", "variable": "E.mahalhaes", "variable2": "edison@iastate.edu" }, { "key": "1743", "variable": "Edward.Rodriguez", "variable2": "edwardrodriguez@altosano.com" }, { "key": "1805", "variable": "mibarreche", "variable2": "martin.ibarreche@altosano.com" }, { "key": "1844", "variable": "miroslava.elvira", "variable2": "miroslava.elvira@altosano.com" }, { "key": "1871", "variable": "ddillard", "variable2": "darby.dillard@pigknows.com" }, { "key": "1872", "variable": "dboling", "variable2": "dillon.boling@pigknows.com" }, { "key": "1929", "variable": "JavierTorres", "variable2": "javier.torres@altosano.com" }, { "key": "2005", "variable": "vbalderrama", "variable2": "vbalderrama@altosano.com" }, { "key": "2035", "variable": "jweber", "variable2": "jweber@smithfield.com" }, { "key": "2084", "variable": "jorge.enriquez", "variable2": "jorge.enriquez@altosano.com" }, { "key": "2124", "variable": "jose.gutierrez", "variable2": "jose.gutierrez@altosano.com" }, { "key": "2125", "variable": "juan.garcia", "variable2": "jose.macias@altosano.com" }];
const sortData = data.sort(
    (elementA, elementB) => elementA.variable.localeCompare(elementB.variable)
);

console.log('SORT DATA :>> ', sortData);

//Ejercicio 
/***
 * 
 * Dado dos argumentos, (array, numero)
 * 1.- Agregar el numero al array 
 * 2.- Ordenar el array
 * 3.- Devolver el indice del numero
 * 
 * PUSH() , SORT()
*/

function getIndexToIns(arr, num) {
    arr.push(num);
    console.log('array original:', arr);
    let index = arr.sort((itemA, itemB) => itemA - itemB).indexOf(num);
    console.log('array Ordenado:', arr);
    console.log('Index: ', index);

    return index;
}

//console.log(getIndexToIns([10, 20, 30, 40, 50], 35));


/*
 TEST 
 */

getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 31);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);
getIndexToIns(arr, '700');