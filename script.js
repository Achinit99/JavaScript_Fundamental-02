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
*/

function fruitProcessor (apples, oranges) {
    //console.log (apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor (8, 0);
console.log (appleJuice);

const appleOrangeJuice = fruitProcessor (2, 5);
console.log (appleOrangeJuice);