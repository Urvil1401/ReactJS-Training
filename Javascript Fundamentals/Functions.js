// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const subtract = (a, b) => a - b;

// Callback function
function processData(callback) {
    let data = 5;
    callback(data);
}
processData((num) => { console.log(num * 2); }); 

// First-Class Functions (passing function as an argument)
function executeFunction(func) {
    func();
}
executeFunction(() => { console.log("Function executed!"); });
