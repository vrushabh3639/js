// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3628828982891988918451n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vrushabh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heroes);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "vrushabh123"

let anotherName = myYoutubename
anotherName = "newchannel"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "vrushabh@gmail.com",
    upi: "vru@hdfc"
}

let userTwo = userOne

userTwo.email = "vru@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);