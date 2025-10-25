'use strict';
let x;

/////////////// 1. Print Numbers (1–10)
/* for (let i = 1; i <= 10; i++) {
  console.log(i);
} */

////////////////// 2. Even & Odd Checker
// Best practice: write pure function (no global variables).
/* function isEvenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
} */
/* const isEvenOrOdd = num => (num % 2 === 0 ? 'Even' : 'Odd');
x = isEvenOrOdd(10);
console.log(x); */

///////////// 3. Array Sum
/* function arraySum(array) {
  let total;
  return (total = array.reduce((sum, current) => sum + current, 0));
} */

// Alternate array function method
/* const arraySum1 = array => {
  let total;
  return (total = array.reduce((sum, current) => sum + current, 0));
};

x = arraySum1([2, 4, 9, 10, 11]);
console.log(x);
 */

//////// 4. Find Maximum Number
/* function findMaxNum(num) {
  return Math.max(...num);
}
x = findMaxNum([5, 12, 8, 130, 44]);
// shorthand
const findMaxNum1 = num => (num = num.length ? Math.max(...num) : null);
x = findMaxNum([5, 12, 8, 130, 44]);
x = findMaxNum1([]);
console.log(x); */

////// 5. Reverse String
/* function reverseString(strValue) {
  return strValue.split('').reverse().join('');
}

const reverseString1 = strValue => strValue.split('').reverse().join('');

x = reverseString('Hello World');
x = reverseString1('Hello');
console.log(x); */

///// 6. Palindrome Checker
/* function palindrome(palindromeValue) {
  return palindromeValue.split('').reverse().join('');
}

x = palindrome('racecar');
console.log(x); */

//// 7. Factorial Calculator
/* function factorial(n) {
  if (n < 0) return 'Factorial not definded for negative numbers';
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
x = factorial(4);
console.log(x); */
/* function factorial1(n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 'Factorial not defined for negative numbers';
  } else {
    return n * factorial1(n - 1);
  }
}
x = factorial1(-4);
console.log(x); */

/* function factorialFinal(n) {
  if (n < 0) return 'Factorial not defined for negative numbers';
  if (n === 0) return 1;
  return n * factorialFinal(n - 1);
}
x = factorialFinal(15);
console.log(x); */

//// 8. Count Vowels
/* function countVowels(str) {
  str = str.toLowerCase();
  const matches = str.match(/[aeiou]/g);
  return matches ? matches.length : 0;
}
x = countVowels('My name is Monirul ');
console.log(x); */

//// 9. FizzBuzz (Classic)

/* function fizzBuzz(val) {
  for (let i = 1; i <= val; i++) {
    console.log(i % 15 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i);
  }
}

console.log(fizzBuzz(20)); */

/* for (let i = 1; i <= printValue; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
} */

//// 10. Simple Calculator
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
