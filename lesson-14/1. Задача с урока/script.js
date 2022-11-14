const calc = str => {
    const [a, operator, b] = str.split(' ');
    let result = 0;
    switch (operator) {
        case "+":
            result = Number(a) + Number(b);
            break;
        case "-":
           result = Number(a) - Number(b);
            break;
        case "/":
            result = Number(a) / Number(b);
            break;
        case "*":
            result = Number(a) * Number(b);
            break;
    }
    return `${str} = ${result}`;
}

console.log(calc('1 + 3'));
console.log(calc('1 - 3'));
console.log(calc('2 * 3'));
console.log(calc('12 / 3'));