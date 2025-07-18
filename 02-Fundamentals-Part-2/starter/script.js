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



//Arrays in JS

const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';


const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends)

const years1 = new Array(1991, 1984, 2008, 2020);  //using array function - new keyword

console.log(friends[0])

// friends = ['bob', 'alice']


const jonas = ['Kaysarul', 'Anas', 2037 - 1991, 'student', friends];
console.log(jonas)

//exercise 

const calage = function (birthYear) {
    return 2025 - birthYear;
}

const years = [1990, 1968, 1779, 2018];
const age1 = calage(years[1])
const age2 = calage(years[0])
const age3 = calage(years[years.length - 1])

const ages = [age1, age2, age3]
console.log(ages)


//array operations

const friends = ['Micheal', 'Steven', 'Peter'];
friends.push('Jay'); //add arrays at the end- return length
console.log(friends);

friends.unshift('John') //add elements to the start - returns length
console.log(friends);


//Remove elements

const popped = friends.pop(); //remove items from the end
console.log(friends)
console.log(popped)  //the items that is removed returned by pop
friends.pop();
console.log(friends)

const shifted = friends.shift()  //remove items from front - opposite of unshift
console.log(friends)
console.log(shifted) //returns the shifted item

//index of
console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))
//includes
console.log(friends.includes('Steven'))
console.log(friends.includes('bob'))


friends.push('Peter')

if (friends.includes('Peter')) {
    console.log('You havea a friend Peter')
}

*/

