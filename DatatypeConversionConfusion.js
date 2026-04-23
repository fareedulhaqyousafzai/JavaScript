let run = 20;
console.log(run);
console.log(typeof run);



let score="33abc";
console.log(score);
console.log(typeof score);

let value=Number(score);
console.log(value);
console.log(typeof value);


let userLogIn=true;
console.log(userLogIn);
console.log(typeof userLogIn);

let booleanValue=Boolean(userLogIn);
console.log(booleanValue);
console.log(typeof booleanValue);

//"33" => 33

// "33abc" is not a pure number, so it cannot be converted to a valid number. Therefore, the result of Number(score) is NaN (Not-a-Number), which indicates that the conversion failed. The type of value will be "number", but its value will be NaN.
 // true => 1
 // false => 0  
