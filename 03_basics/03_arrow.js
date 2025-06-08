const user = {
    username: "vrushabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "vrush"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "vrushabh"
//     console.log(this.username);  
// }

// chai()

// const chai = function () {
//     let username = "vrushabh"
//     console.log(this.username); 
// }

const chai =  () => {
    let username = "vrushabh"
    console.log(this); 
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "vrushabh"})

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 4, 7,  9]

// myArray.forEach()