let salaries = {
    John: 100,
    Mary: 300,
    Kate: 90,
}

let sumSalaries = function (salaries) {
    let sum = 0;
    for ( let key in salaries ) {
        sum += salaries[key];
    }
    return sum;
}

let sum = sumSalaries(salaries);
