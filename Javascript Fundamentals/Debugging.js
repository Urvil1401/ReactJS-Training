// Using console.log for debugging
function debugTest1() {
    let num1 = 10;
    let num2 = 5;
    console.log("Debugging values:", num1, num2); // Logs variables for inspection
    let result = num1 + num2;
    console.log("Result of addition:", result);
}

// Using debugger keyword for breakpoints
function debugTest2() {
    let num1 = 10;
    let num2 = 5;
    debugger; // Pauses execution here
    let result = num1 * num2;
    console.log("Result of multiplication:", result);
}

// 3. Using breakpoints in DevTools
debugTest1();
debugTest2();