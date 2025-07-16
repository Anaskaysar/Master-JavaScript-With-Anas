/*
let js = "amazing";
// if ((js = "amazing")) alert("JavaScript is Fun");

console.log(40 + 9 + 20 - 22 - 22);

let firstName = ' Bob';
let lastName = 'Taylor';


console.log(firstName)


// let new = 27; reserver so cna't be used

let Person = "Anas"; //only used for OOP class names

let PI = 3.1415;   //All capital for constant

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob)


let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');


jsIsFun = "Yes"
console.log(typeof jsIsFun);
let year;
console.log(year);
console.log(typeof year);


year = 2025;
console.log(year)
console.log(typeof year)


let age = 30;    //value here can be changed or mutated
age = 31;

const birthYear = 1991; // we cannot be changed or mutated

// const job; //cont can't be blank
// Best to use const always to avoid bugs or errors.

var job = "Programmer";  //never use var
job = "Coder";

//Always declare variables

lastName = "Anas";
console.log(lastName);


//Operators in JS

const now = 2037;;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// Concatination of String or adding two string together using plus

const lastName = "Anas";
const firstName = "Kaysarul"

console.log(lastName + ' ' + firstName)


let x = 10 + 5; // x= 15
x += 10; // x = x+10
console.log(x)

console.log(ageJonas > ageSarah);


let x, y;

x = y = 25 - 10 - 5; //Assignment operator has less procedence than substraction
console.log(x, y);

const avg = x + y



const firstName = 'Kaysarul';
const job = 'stdudent';
const birthYear = 1997;
const currentYear = 2025;

const anas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';   // Writing string through concatination

const anasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`

console.log(anas)
console.log(anasNew)

// Using template literaal for strings is best possible and easiest option out there.

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can drive 🚗")
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)

//Type conversion and coercion

const inputYear = '1991';
console.log(inputYear)
console.log(inputYear + 18)
console.log(Number(inputYear) + 18)
//Type cohersion
console.log("I am " + 23 + " Years old");
console.log('23' - '10');

let n = '1' + 1;
n = n - 1

console.log(n)


// if there is minus it will convert it to number



//Truthy and Falsy Values

// 5 falsy values are - 0, ' ' , undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean('Jonas'));
console.log(Boolean({}));


// When using logical operators and if else condition

const money = 0;

if (money) {
    console.log("Don't spent it all")
} else {
    console.log('You should get a job')
}


let height = 1;
// let height = 0;
if (height) {
    console.log('Yay! Height is defined')
} else {
    console.log('Height is not defined')
}

// Equality operators

const age = 18; //assignment operator


if (age === 18) {
    console.log('You become an adult (strinct)')  //strict equality
}
if (age == 18) {
    console.log('You become an adult (loose)') //loose equality
}

const fav = Number(prompt("What's your favourite number?"));
console.log(fav, typeof (fav)) //it will return string usually untill wrap it by Number

if (fav === 23) {
    console.log("Yaa!! 23 is a cool number")
} else if (fav === 7) {
    console.log("7 is also a cool bnumber")
} else {
    console.log('Number is not 7 or 23')
}

if (fav !== 23) {
    console.log("Why not 23")
}



// Boolean logic : AND, OR nad Not

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)
console.log(!hasDriverLicense)

// const shouldDrive = hasDriverLicense && hasGoodVision;

if (hasDriverLicense && hasGoodVision) {
    console.log("Sarah is good to drive")
} else {
    console.log("Someone else should drive")
}

const isTired = true

*/