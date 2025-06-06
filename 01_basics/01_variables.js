const accountId = 123536
let accountEmail = "vrushabh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 4 // not allowed


accountEmail = "vrush@vrush.com"
accountPassword = "112211"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])