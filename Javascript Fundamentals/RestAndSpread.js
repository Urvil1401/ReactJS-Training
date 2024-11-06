// Rest operator (in function parameters)
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3));

// Spread operator (arrays and objects)
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);

let obj1 = { name: "John", hobby: "fun" };
let obj2 = { ...obj1, age: 30 };
console.log(obj2);
