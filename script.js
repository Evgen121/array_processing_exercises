//Exercise 1

/* function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b))
}

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

console.log(filtered) // 3,1 (matching values)

console.log(arr) */

//Exercise 2

/* let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let users = [john, pete, mary]

let names = users.map(item => item.name)
console.log(names) */

//Exercise 3

/* function getAverageAge(users) {
    return users.reduce((item, user) => item + user.age, 0) / users.length
}
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [john, pete, mary]

console.log(getAverageAge(arr)); */