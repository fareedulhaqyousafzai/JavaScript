//Data Type
//primitives data type
//String,Number,Boolean,undefined,null,Symbol,BigInt


//Non-primitive data type  
//Array,Object,Function



console.log("Data Type");
console.log("String")
const Name="Shahid"; 
console.log(Name);

console.log("Number")
const Index=1434; 
console.log(Index);

console.log("boolean")
const value=true;
console.log(value);

console.log("Null")
const temp=null;
console.log(temp);

console.log("Undefined")
let imp;
console.logs(imp);

console.log("Symbol")
let id=Symbol("id");
let id2=Symbol("id");


let id3= id == id2;
console.log(id2.toString());


console.log("BigInt")
let big=BigInt("1234567890123456789012345678901234567890");
console.log(big);



console.log("Array")
const Students=["Farhan","Aftab","Samad","Kamran"]; 
console.log(Students);

console.log("Object")
const Student={Name:"Fareed",Age:23,}; 
console.log(Student.Name+Student.Age);

console.log("Function")
function sum(a,b){
    return a+b; }
console.log(sum(5,10));


console.log(typeof sum);
