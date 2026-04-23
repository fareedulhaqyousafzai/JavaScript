// const score = 100;
// const score = "100";
// const score = "100abn";
// const score = null;
// const score = undefined;
const score = true;

console.log(typeof score);
console.log(typeof(score));
console.log(score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "100" => 100
// "100abn" => NaN
// true => 1; false => 0

// let isLoggedIn = 1;
//  let isLoggedIn = 0;
// let isLoggedIn = "";
let isLoggedIn = "Fareed";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Fareed" => true


let someNumber = 100;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
