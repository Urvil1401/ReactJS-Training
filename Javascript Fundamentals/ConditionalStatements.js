// if-else and else-if
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Weekend");
}

// Ternary Operator
age = 20;
let message = age >= 18 ? "You can vote." : "You cannot vote.";
console.log(message);

// Logical AND (&&)
let isStudent = true;
if (age >= 18 && isStudent) {
    console.log("You are an adult.");
}

// Logical OR (||)
let hasTicket = true;
if (hasTicket || isStudent) {
    console.log("You can enter the event.");
}