/**
 * Escribe la función sortByAge(users) 
 * que cree un array de objetos con al propiedad age y los ordene según age.
 */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];


const sortByAge = arr => arr.sort( (itemA,itemB) => itemA.age - itemB.age ); 

console.log('sortByAge(arr) :>> ', sortByAge(arr));