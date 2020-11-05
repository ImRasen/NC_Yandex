function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let trueI = i;
        let shooter = function() { // функция shooter
            console.log( trueI ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();