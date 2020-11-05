function sum(augend) {
    return function(addend) {
        return augend + addend;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));