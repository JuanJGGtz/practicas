/**
 * Escribe la función getAverageAge(users) que obtenga un array de objetos con la 
 * propiedad age y devuelva el promedio de age.
 * La fórmula de promedio es (age1 + age2 + ... + ageN) / N.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

let averageAge = arr.reduce((acc, cur) => (acc + cur.age), 0) / arr.length;

console.log('arr :>> ', arr);
console.log('averageAge :>> ', averageAge);