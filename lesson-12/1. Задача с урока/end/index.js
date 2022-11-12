const getFiniteNumbers = arr => arr.filter(Number.isFinite);
const getFiniteNumbersV2 = arr => arr.filter(isFinite);
const getNaN = arr => arr.filter(Number.isNaN);
const getNaNV2 = arr => arr.filter(isNaN);
const getIntegers = arr => arr.filter(Number.isInteger);