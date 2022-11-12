const getFiniteNumbers = arr => arr.filter(item => Number.isFinite(item));

const arrFinite = [12,23,123,NaN,undefined,Infinity,"a12sd",'1'];
console.log(getFiniteNumbers(arrFinite));

const getFiniteNumbersV2 = arr => arr.filter(item => isFinite(item) );

console.log(getFiniteNumbersV2(arrFinite));

const getNan = arr => arr.filter(el => Number.isNaN(el));
const arrNan = [NaN, 1, 2,34123,123,undefined,NaN];
console.log(getNan(arrNan));

const getNaNV2 = arr => arr.filter(el => isNaN(el));
console.log(getNaNV2(arrFinite));
const arrInteger = [1.2,12,23,12.2,123.2,12,23];
const getIntegers = arr => arr.filter(el => Number.isInteger(el));
console.log(getIntegers(arrInteger));