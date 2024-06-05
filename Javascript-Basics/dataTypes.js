// # Primitive data type(call by value)
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue = 100.3
const isAdmin = false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 2334424n
console.log(typeof bigNumber);

// # Non-Primitive type(reference)
// Array, Object, Functions

//is javascript statically type or dynamic type language ?

const player = ["Rohit", "Virat", "Surya"]
console.log(typeof player); // object

let myObj = {
    name: "anand",
    age: 23,
    email: "anand@gmail.com"
}
console.log(myObj);

const myFunction = function add() {
    console.log("Hello world!");
}

console.log(myFunction);