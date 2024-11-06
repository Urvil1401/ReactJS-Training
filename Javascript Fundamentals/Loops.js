// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for-in loop (iterates over object properties)
let person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key, person[key]);
}

// for-of loop (iterates over array values)
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}

// while loop
let counter = 0;
while (counter < 3) {
    console.log(counter);
    counter++;
}

// do-while loop
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 3);
