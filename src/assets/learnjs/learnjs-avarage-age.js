let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge (arr) {
    if (arr.length < 1) {
        return;
    }
    let sum = arr.reduce((sum, current) => sum + current.age, 0);
    return sum/arr.length;
}