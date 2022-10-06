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


// Dot vs. Bracket Notation

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Michael', 'Achini', 'Kawshalya']
};
console.log (jonas); 

console.log (jonas.lastName); 
console.log (['jonas.lastName']); 

const nameKey = 'Name';
console.log (jonas ['first' + nameKey]);
console.log (jonas ['last' + nameKey]);

const interestedIn = prompt ('What do you want to know about Jonas? Choose between fristName, lastName, age, job, and friends');
// console.log (interestedIn);
// console.log (jonas [interestedIn]);

if (jonas [interestedIn]) {
    console.log (jonas[interestedIn]);
} else {
    console.log ('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Sri Lanka'; // Add
jonas ['twitter'] = '@jonasschmedtman';
console.log (jonas);


// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log (`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends [0]}`);


// Object Methods
const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYear : 1991,
    job : 'teacher',
    friends : ['Michael', 'Achini', 'Kawshalya'],
    hasDriversLicense : true, // false

    // calcAge : function (birthYear) {
    //     return 2037 - birthYear;
    // }

//     calcAge : function () {
//         // console.log (this);
//         return 2037 - this.birthYear;
//     }

    calcAge : function () {
            this.age = 2037 - this.birthYear;
            return this.age;
    },

    getSummary : function () {
        return `${this.firstName} is a ${this.calcAge()}- year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }

};

console.log (jonas.calcAge ());
//console.log (jonas.age ());
// console.log (jonas ['calcAge'] (1991));

// Challenge 
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log (jonas.getSummary ());


// Coding Challenge #3
const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function () {
        this.bmi = this.mas / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function () {
        this.bmi = this.mas / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI ();
john.calcBMI ();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi, john.bmi) {
    console.log (`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log (`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}


// Iteration _ The for Loop

console.log ('Lifting weights repetition 1');
console.log ('Lifting weights repetition 2');
console.log ('Lifting weights repetition 3');
console.log ('Lifting weights repetition 4');
console.log ('Lifting weights repetition 5');
console.log ('Lifting weights repetition 6');
console.log ('Lifting weights repetition 7');
console.log ('Lifting weights repetition 8');
console.log ('Lifting weights repetition 9');
console.log ('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE

// for (let rep = 5; rep <= 10; rep = rep++) {
//     console.log (`Lifting weights repetition ${rep}`);
// }


// Looping Arrays, Breaking and Continuing 

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Achini', 'Kawshalya'],
    true
];

const types = [];

// console.log (jonas[0])
// console.log (jonas[0])
// ...
// console.log (jonas[0])
// jonas [5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log (jonas [i], typeof jonas [i]);

    // Filling types array
    // types [i] = typeof jonas [i];
    types.push (jonas [i]);
}

console.log (types);

// for (let i = 0; i < 5; i++) {
//     console.log (jonas [i]);
// }

// Practise

const years = [1991, 2007, 1969, 2020];
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push (2037 - years [i]);
}

console.log (ages);

// Continue and break

console.log ('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas [i] !== 'string') continue;

    console.log (jonas [i], typeof jonas [i]);
}

console.log ('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas [i] === 'number') break;

    console.log (jonas [i], typeof jonas [i]);
}


// Looping Backwards and Loops in Loops

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Achini', 'Kawshalya'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0 

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log (jonas [i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log (`---------- Starting exercise ${exercise}----------`);

    for (let rep = 1; rep < 5; rep++) {
        console.log (`Exercise ${exercise} Lifting weight repetition ${rep} 👩‍⚕️`);
    }
}


// The While Loop

for (let rep = 1; rep <= 10; rep++) {
    console.log (`Lifting weights repetition ${rep} 🏋️‍♀️🧘‍♀️`);
}


let rep = 1;
while (rep <= 10) {
    console.log (`WHILE: Lifting weights repetition ${rep} 🧘‍♀️`);
    rep++;
}

let dice = Math.trunc (Math.random () * 6) + 1;

while (dice !== 6) {
    console.log (`You rolled a ${dice}`);
    dice = Math.trunc (Math.random () * 6) + 1;
    if (dice === 6) console.log ('Loop is about to end...');
}
*/

// Coding Challenge #4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip (bills [i]);
    tips.push (tip);
    totals.push (tip + bills [i]);
}
console.log (bills, tips, totals);