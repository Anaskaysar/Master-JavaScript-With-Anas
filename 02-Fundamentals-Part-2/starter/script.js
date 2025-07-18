'use strict';

/*
// Strick mode experiment
let hasDriverLicense = false;
const passTest = true;


if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive')


// const interface = 'Audio';
// const private = 534;



//Functions

function logger() {
    console.log('I am Anas');
}

//invoking calling or running the function
logger();
logger();
logger();

function foodProcessor(orange, apple) {
    console.log(orange, apple);
    const juice = `Juice with ${apple} apples and ${orange} oranges.`
    return juice;
}

const food = foodProcessor(5, 0)
console.log(food)


//function declaration - can call function earlier before declaration

function calAge1(birthYear) {
    const currentYear = 2025;
    const age = currentYear - birthYear;
    return age;
}
console.log(calAge1(1991))

//function expression - expression produce values-function is a value we can store in a variable - cannot call before declaration - nice structure

const calAge2 = function (birthYear) {
    return 2025 - birthYear;
}

console.log(calAge2(1991));

//Arrow function

const calAge3 = birthyear => 2037 - birthyear;
console.log(calAge3(1991))


const yearUntillRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires at the age of ${retirement}`;
};

console.log(yearUntillRetirement(1991, 'Anas'))
console.log(yearUntillRetirement(1985, 'Bob'))

//Functions calling other function

function foodCutter(fruit) {
    return fruit * 4;
}

function foodProcessor(orange, apple) {
    const applePieces = foodCutter(apple);
    const orangePieces = foodCutter(orange);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
}

console.log(foodProcessor(5, 4))

*/