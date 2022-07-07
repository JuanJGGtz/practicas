/**
 * Devuelve una cadena proporcionada con la primera palabra de cada letra en mayuscula
 * sHoRt AnD sToUt => Short And Stout
 * HERE IS MY HANDLE HERE IS MY SPOUT => Here Is My Handle Here Is My Spout
 * I'm a little tea pot => I'm A Little Tea Pot
 */

function titleCase(str) {
    //Conviertes la cadena proporcionada en minúsculas
    let newStr = str.toLowerCase();
    //Semparamos por espacio
    newStr = newStr.split(" ");

    let newStatement = "";

    for (let i = 0; i < newStr.length; i++) {
        // Los string son inmutables. No se puede editar.

        //1.- Por cada elemento(palabra), obtienes el primer elemento(caracter|letra) y lo conviertes en mayúscula
        //2.- Obtenemos el restante de la palabra con SLICE, que da como resultado un nuevo array|cadena
        newStatement += `${newStr[i][0].toUpperCase()}${newStr[i].slice(1)} `;
    }
    return newStatement.trim();
}

console.log('resultado :>> ', titleCase("sHoRt AnD sToUt"));
/**
 * Otras Soluciones
 */
// #1 
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}
// #2
function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
        .join(" ");
}

titleCase("I'm a little tea pot");

// #3
function titleCase(str) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, L => L.toUpperCase());
}