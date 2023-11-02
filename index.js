// Iteration 1: Names and Input

let hacker1 = "victor"
console.log(`the driver is ${hacker1}`)
let hacker2 = "juanito"
console.log(`the navigator is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} is greater than ${hacker2}`);
} 
else if (hacker1.length < hacker2.length) {
    console.log(`${hacker2} is greater than ${hacker1}`);
} 
else {
    console.log(`Both hackers have the same length.`);
}

// Iteration 3: Loops

// Iteration 3.1

let spacedDriverName = hacker1.split('').join(' ').toUpperCase();
console.log(spacedDriverName);

// Iteration 3.2

let reversedNavigatorName = hacker2.split('').reverse().join('');
console.log(reversedNavigatorName);

// Iteration 3.3
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}