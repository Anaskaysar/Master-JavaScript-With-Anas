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

// const measureInKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         value: prompt("Degree Celsius: ")
//     }
//     // console.log(measurement.value)
//     // console.warn(measurement.value)
//     // console.error(measurement.value)
//     console.table(measurement)
//     const kelvin = measurement.value + 275;
//     return kelvin;
// }

// console.log(measureInKelvin())


// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

// Understandding the problesm
//- Array transformed to string, separated by ...
// - What is the X days? it's Anas: index+1


//Breaking up intro sub-problems
//- Transforom each element to string with C
//- String needs to contain day (index+1) 
// Add ... between elements and start and end of string
// Log string to console



// const paintForecase = function (arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         str = str + `${arr[i]}ºC in ${i + 1} days ...`;
//     }
//     console.log('... ' + str);
// }

// paintForecase(t1);
// paintForecase(t2);

///////////////////////////////////////
// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

const testDATA = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const totalHoursworked = function (arr) {
    //Improvement suggested by ChatGPT - Important for all kinds of problem solving
    if (arr.length === 0) {
        console.log("No data provided.");
        return;
    }


    // let avg = 1; - Improvement suggested by ChatGPT - avg default value = 1 is unnecessary – just compute after loop.
    let sum = 0;
    let maxDailyhours = arr[0];
    let maxDayIndex = 0;
    let numberofDaysWorked = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (arr[i] > maxDailyhours) {
            maxDailyhours = arr[i];
            maxDayIndex = i;

        }
        if (arr[i] !== 0) {
            numberofDaysWorked += 1;
        }
    }
    let avg = sum / arr.length;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log('1. Total hours Worked: ' + sum);
    console.log('2. Avg Daily Hours: ' + avg);
    console.log('3. The day with the most hours worked: ' + days[maxDayIndex] + `(${maxDailyhours} hrs)`);
    console.log('4. Number of days worked ' + numberofDaysWorked);
    console.log("5. " + (sum >= 35 ? "Full Time" : "Not Full Time")); //By ChatGPT

    //By Me
    // if (sum < 35) {
    //     console.log('5. Not Full Time')
    // } else {
    //     console.log("5. Full Time")
    // }

}

totalHoursworked(testDATA);