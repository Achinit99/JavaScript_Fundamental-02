/*
"use strict";
// Activating String Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log ("I can drive :D");


// Functions

function logger () {
    console.log ("I'm Achini Thathsarani");
}

// calline / running / invoking function
logger ();
logger ();
logger ();


function fruitProcessor (apples, oranges) {
    //console.log (apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor (8, 0);
console.log (appleJuice);

const appleOrangeJuice = fruitProcessor (2, 5);
console.log (appleOrangeJuice);


// Function Declarations
function calcAge1 (birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1 (1999);


// Function Expressions
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2 (1997);

console.log (age1, age2);


// Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3 (1999);
console.log (age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log (yearsUntilRetirement (1999, `Achini`));
console.log (yearsUntilRetirement (1997, `Avishka`));
*/


// Functions Calling Other Functions
function cutFruitPieces (fruit) {
    return fruit * 4;
}
function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces (apples);
    const orangePieces = cutFruitPieces (oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log (fruitProcessor (2, 3));