'use strict';
let x;
/* if ('0') {
  alert('hello');
}
 */

/* let promptVal = prompt("What's the “official” name of JavaScript?", '');
if (promptVal === 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don't know? “ECMAScript”!");
} */

/* let promptVal = Number(prompt('Enter value', ''));
if (promptVal > 0) {
  alert(`${promptVal} is greater than zero`);
} else if (promptVal < 0) {
  alert(`${promptVal} less than zero`);
} else {
  alert(promptVal + ' Exact zero');
} */

let a;
let b = 4;
let result;
/* if (a + b > 4) {
  result = 'Below';
} else {
  result = 'Over';
  console.log(a + b);
}
console.log(result); */
/* result = a + b <= 4 ? 'Below' : 'Over ' + console.log(b);
console.log(result); */

// Rewrite if..else using multiple ternary operators '?'.
/* let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

/* let login = prompt('Who is try to login?', '');
let message;

message =
  login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No Login' : '';
console.log(message); */

/* function fruitProcessor(apple, orange) {
  let message = `we have ${apple} apples and ${orange} oranges`;
  return message;
}

x = fruitProcessor(10, 19);
console.log(x);
 */

// Logical operators
let res;
/* console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false); */

// if (0 || 1) console.log('truthy');

let hour = 9;
/* if (hour < 10 || hour > 18) {
  console.log('The office is closed.');
} */

hour = 12;
let isWeekend = true;
/* if (hour < 10 || hour > 18 || isWeekend) {
  console.log('The office is closed.');
} else {
  console.log('The office is opened.');
}
 */
console.log(1 || 0); // 1 is truthy
console.log(null || 0 || 'Hello'); // the first truthy value
console.log(null || undefined || 0); // all falsy , ruturn the last value

let city = 'Delhi';
if (city === 'Delhi' || city === 'Mumbai') {
  console.log('Metro City');
}

// NOT (!)
let isLoggedIn = false;
if (!isLoggedIn) console.log('Please login first!');

let age = 5;
let hasID = true;
if (age > 18 && age < 60) {
  console.log('Entry allowd');
} else {
  console.log('Entry not allow');
}

console.log('name' || 'name1');
console.log(0 && 'string');

let userName = 'monirul';
let passWord = '1234';

let loginStatus;

loginStatus =
  userName === 'monirul' && passWord === '1234' ? 'Login Successful' : 'Invalid Credentials';
console.log(loginStatus);

console.log(!!'Hello');

/* let userName1 = prompt('Enter your name', '');
// userName1 = `Hello ${userName1}` || 'Hello Guest';
userName1 = userName1 ? `Hello ${userName1}` : 'Hello Guest';
console.log(userName1); */

/* let isMember = false;
let purchaseAmount = 501;
let discount =
  (isMember && purchaseAmount > 300) || purchaseAmount > 500 ? 'Discount Applied' : 'No Discount';
console.log(discount); */

let value = '0';
x = !!value ? 'truthy' : 'falsy';
console.log(x);
console.log(!!0);
console.log(!!1);
console.log(!!'hello');
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![]);

/* let marks = 74;
if (marks >= 90) {
  x = 'Grade A';
} else if (marks >= 75 && marks < 90) {
  x = 'Grade B';
} else if (marks >= 50 && marks < 75) {
  x = 'Grade C';
} else {
  x = 'Fail';
}
console.log(x); */

/* let user = { name: 'Ali', email: 'mr.monirul@gmail.com' };
x = user.email ? user.email : 'Email not available';
console.log(x) */

x = 0 || null || '' || 'Hello' || 'World';
x = true && 'JS' && 123 && null && 'Done';
console.log(x);
