/**
 * Tienes un array de objetos user, cada uno tiene user.name. 
 * Escribe el código que lo convierta en un array de nombres.
 */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);
console.log('users :>> ', users);
console.log('names :>> ', names);