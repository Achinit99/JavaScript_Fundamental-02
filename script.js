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



// Reviewing Functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge (birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log (`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log (`${firstName} has alredy retired`);
        return -1;
    }
}

console.log (yearsUntilRetirement (2000, "Jonas"));
console.log (yearsUntilRetirement (1960, "Mike"));


// Coding Challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log (calcAverage (3, 4, 5));

// Test
const scoreDolphins = calcAverage (44, 23, 71);
const scoreKoalas = calcAverage (65, 54, 49);
console.log (scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log (`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log ("No team wins...");
    }
}
checkWinner (scoreDolphins, scoreKoalas);

checkWinner (576, 111);

// Test 2
// scoreDolphins = calcAverage (85, 54, 41);
// scoreKoalas = calcAverage (23, 34, 27);
// console.log (scoreDolphins, scoreKoalas);
// checkWinner (scoreDolphins, scoreKoalas);


// Introduction to Arrays

const friend1 = "Michael"; // 0
const friend2 = "Steven"; // 1
const friend3 = "Peter"; // 2

const friends = ["Michael", "Steven", "Peter"];
console.log (friends);
console.log (friends[0]); // 1 - array
console.log (friends[2]);

console.log (friends.length); // 2 - array
console.log (friends[friends.length - 3]);

friends[2] = "Achini"; // new replace 2 - array achini
console.log (friends);

const firstName = "Achini";
const Achini = [firstName, "Thathsarani", 2037 - 1999, "teacher", friends];
console.log (Achini);
console.log (Achini.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// console.log (calcAge(years));

const age1 = calcAge (years[0]);
const age2 = calcAge (years[1]);
const age3 = calcAge (years[years.length - 1]);
console.log (age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log (ages);


// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add Elements
const newlength = friends.push ("Achini");
console.log (friends);
console.log (newlength);

friends.unshift ("Dilki");
console.log (friends);


// Remove Elements
friends.pop ();  // Array Last Remove - one by one
console.log (friends);

const popped = friends.pop ();  // Array Last Remove - All Remove
console.log (popped);

friends.shift ();  // Array First - Remove
console.log (friends);

console.log (friends.indexOf ("Steven"));
console.log (friends.indexOf ("Bob"));

friends.push(23) // -->
console.log (friends.includes ("Steven"));
console.log (friends.includes ("Bob"));
console.log (friends.includes (23)); // -->

if (friends.includes ("Steven")) {
    console.log ("You have a frind called Steven");
}


// Coding Challenge #2 --> error (weradi)
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip (bills[0]), calcTip (bills[1]), calcTip (bills[2])];
const totals = [bills [0] + tips [0], bills [1] + tips [1], bills [2] + tips [2]];

console.log (bills, tips, totals);


// Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Achini', 'Kawshalya']
];

const jonas = {
    firstNamne : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Michael', 'Achini', 'Kawshalya']
};
*/

// Dot vs. Bracket Notation

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Michael', 'Achini', 'Kawshalya']
};
console.log (jonas); 

console.log (jonas.lastName); // (1-)
console.log (['jonas.lastName']); // (2-)

const nameKey = 'Name';
console.log (jonas ['first' + nameKey]);
console.log (jonas ['last' + nameKey]);