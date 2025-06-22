const user = {
    username: "Vrushabh",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("vrushabh", 5, true)
const userTwo = new User("vrush", 3, false)
console.log(userOne.constructor);
// console.log(userTwo);