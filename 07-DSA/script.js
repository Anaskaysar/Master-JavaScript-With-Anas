'use strict'
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

//nested destructuring
// const nested = [2, 3, [4, 5]];

// const [i, , j, l] = nested;
// console.log(i, j, l)

// const [x, y, z, k] = restaurant.categories;
// console.l og(x);



// //default values

// const [p, q, r] = [8, 9];
// console.log(p, q, r)
// restaurant.orderDelivery(
//     {
//         time: '20:30',
//         address: "Regent St, Sudbury",
//         mainIndex: 2,
//     }
// )

// //Spread, because of right side of  =

// const arr = [1, 2, ...[3, 4]];

// //Rest, because of LEFT side of = 
// const [a, b, ...others] = [1, 2, 3, 4, 5]

// console.log(a, b, others)


//Optional Chaining - to avoid undefiend error
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours.fri.open)


// for (const day of Object.keys(openingHours)) {
//     console.log(day)
// }