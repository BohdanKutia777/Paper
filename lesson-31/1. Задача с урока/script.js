const getValueWithDelay = (value, delay) => new Promise (resole => {
    setTimeout(() => {
        resole(value);
    }, delay);
});


const asyncNum1 = getValueWithDelay(21, 1200);
const asyncNum2 = getValueWithDelay(1, 3000);
const asyncNum3 = getValueWithDelay(11, 1000);


const getSum = numbers => 
    numbers
    .filter(value => !isNaN(value))
    .reduce((acc, el) => acc + el, 0);

const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => new Error("Can't calculate"));
}


asyncSum(asyncNum1,Promise.reject(new Error('err')),asyncNum3)
    .then(result => console.log(result));