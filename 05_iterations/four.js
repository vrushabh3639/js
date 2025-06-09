const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    rs: 'rust'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "rust", "cpp", "python"]

for (const key in programming) {
    // console.log(programming[key]);   
}

// const map = new Map()
// map.set('IN', "India")
// map.set('US', "USA")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// }