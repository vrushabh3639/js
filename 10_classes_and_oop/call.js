function SetUserName(username) {
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password) {
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("vrushabh", "vrush@gmail.com", "123")
console.log(chai);