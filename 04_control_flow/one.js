// if

// const isUserLoggedIn = true

// const temperature = 30

// if ( temperature ===30 ) {
//     console.log("less then 40");
// } else {
//     console.log("greater then 40");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");


// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance <750) {
//     console.log("less than 750");

// } else if (balance <900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}