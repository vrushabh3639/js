class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}vrushabh`
    }

    set password(value) {
        this._password = value
    }
}

const vrushabh = new User("vrush@gmail.com", "abc")
// console.log(vrushabh.password);
console.log(vrushabh.email);