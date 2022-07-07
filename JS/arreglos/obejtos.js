/**
 * Los OBJETOS, no son más que colecciones de pares clave-valor
 * 
 */

const cerda = {
    id: 'SOW1234',
    entryAge : 2022-05-30,
    weight: 78,
    status: true,
    "num abortions" : 12
}
console.log('cerda  notación de corchetes :>> ', cerda["num abortions"]);
console.log('cerda :>> ', cerda);

//AGREGAR UNA PROPIEDAD
cerda.origin = 'FARM01';
console.log('cerda ORIGEN :>> ', cerda);



//MODIFICAR PROPIEDAD 
cerda.origin = 'FARM02';
console.log('cerda ORIGEN OTRA:>> ', cerda);


//ELIMINAR PROPIEDAD
delete cerda.origin;
console.log('cerda DELETE:>> ', cerda);
