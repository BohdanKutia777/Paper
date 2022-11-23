const sumOfSquares = function ()  {
    return [...arguments].reduce((acc,el) => {
        return acc += el * el;
    }, 0);
}
console.log(sumOfSquares(1,23,4,12,14,13));



const sumOfSquares1 = function ()  {
    return [].map.call(arguments, num => num * num).reduce((acc,el) => {
        return acc + el;
    }, 0);
}

console.log(sumOfSquares1(1,23,4,12,14,13));