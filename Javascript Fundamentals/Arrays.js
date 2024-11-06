let arr = [1, 2, 3, 4];

arr[0] = 10;
console.log(arr[0]); 

arr.push(5); // Add to end
arr.pop(); // Remove from end
arr.shift(); // Remove from start
arr.unshift(0); // Add to start

arr.forEach(num => console.log(num));
let doubled = arr.map(num => num * 2);
console.log(doubled); 

let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);

let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);
