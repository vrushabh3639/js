class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("teacher", "vrush@teacher.com", "123")

chai.addCourse()

const vrush = new User("vrushabh")

vrush.logMe()

console.log(chai instanceof User);
