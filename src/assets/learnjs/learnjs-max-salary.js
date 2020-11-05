let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function maxSalary(office) {
    let employee = Object.entries(office);
    let sorted = employee.sort((employee1, employee2) => employee2[1] - employee1[1] );
    return sorted[0][0];
}

console.log( maxSalary(salaries) );