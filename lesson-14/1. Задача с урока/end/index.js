const calc = expression => {
    let [a, operation, b] = expression.split(' ');
    let result;
    a = +a;
    b = +b;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }

    return `${expression} = ${result}`; 
};
