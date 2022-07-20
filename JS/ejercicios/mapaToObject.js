/**
 * Tienes un array de objetos user, cada uno tiene name, surname e id.
 * 
 * Escribe el código para crear otro array a partir de este, de objetos con id y fullName, 
 * donde fullName es generado a partir de name y surname.
 * 
 */

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let usersObj = [john, pete, mary];
console.log('usersObj :>> ', usersObj);

//FORMA 1
/* let usersMapped = usersObj.map(item => {
    let newObj = {};

    newObj['fullName'] = `${item.name} ${item.surname}`;
    newObj['id'] = item.id;

    return newObj;

}); */

//FORMA 2
let usersMapped = usersObj.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}));

console.log('usersMapped :>> ', usersMapped);