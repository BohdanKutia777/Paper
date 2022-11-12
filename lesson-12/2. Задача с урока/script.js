const arrNum = [1,1.2,31.2,123,12,312,3123,12.31212312312,123.123,1231,12.2, "1212.12"];
console.log(arrNum);
const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));
console.log(getParsedIntegers(arrNum));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));
console.log(getParsedIntegersV2(arrNum));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));
console.log(getParsedFloats(arrNum));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));
console.log(getParsedFloatsV2(arrNum));