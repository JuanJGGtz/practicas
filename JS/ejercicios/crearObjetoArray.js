/**
 * 
 * 
 * 
 * 
 */
let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

/* function groupById(arr) {
    let newObj = arr.map(function (item) {
        item.id = {
            'id': item.id,
            'name': item.name,
            'age': item.age,
        }
    });

    console.log('newObj :>> ', newObj);
} */
function groupById(array) {
    return array.reduce((obj, value) => {
        console.log('obj :>> ', obj);
        console.log('value :>> ', value);
        obj[value.id] = value;
        return obj;
    }, {})
}


let usersById = groupById(users);
console.log('usersById :>> ', usersById);
//después de llamar a la función deberíamos tener:
/*
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
