let person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello');
    }
};

console.log(person.name); 
person.age = 35;
console.log(person.age); 

for (let key in person) {
    console.log(key, person[key]);
}

person.greet();

// Shallow copy (Nested objects or arrays are still referenced, not duplicated)
let original1 = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, original1);
let shallowCopy2 = { ...original1 };

shallowCopy.b.c = 10;
console.log(original1.b.c);  // 10 (because it's a reference, not a new object)
console.log(shallowCopy.b.c);  // 10

// Deep copy (Completely independent copy, including nested objects)
let original2 = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original2));

deepCopy.b.c = 10;
console.log(original2.b.c);  // 2 (original remains unchanged)
console.log(deepCopy.b.c);   // 10
