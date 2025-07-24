/*

Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

//Returning - Converting to number
var isPalindrome = function (x) {
    let y = String(x);
    let z = '';
    for (const i of y) {
        z = i + z;
    }  
    z = Number(z);
    return x === z;
};

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false

//Returning - Without converting to number
var isPalindrome2 = function (x) {
    if (x < 0) return false; // Negative numbers aren't palindromes
    
    let y = String(x);
    let z = '';
    for (const i of y) {
        z = i + z;
    }  
    return y === z;
};

// console.log(isPalindrome2(123)); // false
// console.log(isPalindrome2(121)); // true
// console.log(isPalindrome2(-121)); // true

//Using reverse method
var isPalindrome = function (x) {
    if (x < 0) return false; // Negative numbers aren't palindromes
    let str = String(x);
    return str === str.split('').reverse().join('');
};
console.log(isPalindrome2(121)); // true
console.log(isPalindrome2(-121)); // false
console.log(isPalindrome2(10)); // false