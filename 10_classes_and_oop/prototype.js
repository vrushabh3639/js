// let myName = "vrushabh   "
// let myName1 = "vrush   "

// console.log(myName.trueLength);

let myHeroes = ["thor", "batman"]

let heroPower = {
    thor: "hammer",
    batman: "money",

    getBatmanPower: function() {
        console.log(`Batman's power is ${this.batman}`);
    }
}

Object.prototype.vrushabh = function() {
    console.log(`vrushabh is present in all objects`);
    
}

Array.prototype.heyvrushabh = function() {
    console.log(`vrushabh says hello`);
    
}

// heroPower.vrushabh()

// myHeroes.vrushabh()
// myHeroes.heyvrushabh()
// heroPower.heyvrushabh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "vrushabh       "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"vrushabh".trueLength()
"icetea".trueLength()