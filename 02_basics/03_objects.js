// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Vrushabh",
    "full name": "Vrushabh Patel",
    [mySym]: "myKey1",
    age: 20,
    location: "Mumbai",
    email: "vrushabh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vrush@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "vrush@apple.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
