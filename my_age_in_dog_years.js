// This program will convert my age to dog years
// My age is 30
// The first two years of a dog's life count as 10.5 dog years each
// Each year following equates to 4 dog years


// Variable set to my age
const myAge = 30;
// Variable set to 2
let earlyYears = 2
earlyYears *= 10.5;
// Substracting 2 to myAge
let laterYears = myAge - 2;
//Multiplying laterYears by 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);
// Adding earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;

let myName = "Sean".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears}years old in dog years.`);