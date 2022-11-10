const getSpecialNumbers = array => array.filter(num => num % 3 === 0);

const array1 = [1,23,233,3,4,5,61,13,12,123];
console.log(getSpecialNumbers(array1));
console.log(array1);