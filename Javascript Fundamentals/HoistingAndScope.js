// Hoisting
console.log(x); 
var x = 5;

// Execution Context & Lexical Scope
function outer() {
    let outer = 'Out';
    function inner() {
        console.log(outer);
    }
    inner();
}
outer();

// Temporal Dead Zone
console.log(a);
let a = 10;

// Block Scope
if (true) {
    let blockScoped = 'Block';
}
console.log(blockScoped); 