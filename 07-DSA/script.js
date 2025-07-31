'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavani 23, Firzene, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startermenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thus: {
            open: 8,
            close: 12
        },

    }
}

//nested destructuring
// const nested = [2, 3, [4, 5]];

// const [i, , j, l] = nested;
// console.log(i, j, l)

// const [x, y, z, k] = restaurant.categories;
// console.log(x);



// //default values

// const [p, q, r] = [8, 9];
// console.log(p, q, r)