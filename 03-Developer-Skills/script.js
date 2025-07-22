// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// if (x === 23) console.log(23);

// const calcAge = birthyear => 2037 - birthyear;
// console.log(1991);


//Problem:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature1 = [-3, -2, -6, -2, 'error', 9, 25, 17, 15, 14, 8, 5];
const temperature2 = [-7, -2, -6, -2, 'error', 9, , 17, 15, 14, 8, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it 

// const calcTempAmplitude = function (temp) {
//     let max = temp[0];
//     let min = temp[0];

//     for (let i = 0; i < temp.length; i++) {

//         const currentTemp = temp[i];
//         if (typeof currentTemp !== 'number') continue;
//         if (currentTemp > max) max = currentTemp;
//         if (currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min)
//     return max - min;
// }

// // calcTempAmplitude([2, 5, 7])
// const amplitude = calcTempAmplitude(temperature);
// console.log(amplitude)

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitude = function (t1, t2) {
//     const temp = t1.concat(t2)
//     let max = temp[0];
//     let min = temp[0];

//     for (let i = 0; i < temp.length; i++) {

//         const currentTemp = temp[i];
//         if (typeof currentTemp !== 'number') continue;
//         if (currentTemp > max) max = currentTemp;
//         if (currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min)
//     return max - min;
// }

// // calcTempAmplitude([2, 5, 7])
// const amplitude = calcTempAmplitude(temperature1, temperature2);
// console.log(amplitude)

//Fixing Bugs

const measureInKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: prompt("Degree Celsius: ")
    }
    // console.log(measurement.value)
    // console.warn(measurement.value)
    // console.error(measurement.value)
    console.table(measurement)
    const kelvin = measurement.value + 275;
    return kelvin;
}

console.log(measureInKelvin())
