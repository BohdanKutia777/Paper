const flatArray1 = arr => arr.flat();
const flatArray2 = arr => {
    return arr.reduce((acc, elem) => {
    return acc.concat(elem);
}, []);
};
const array = [1,2,3,4,5,[2,2,3,4],1,[1212,12]];
console.log(flatArray1(array));
console.log(flatArray2(array));
console.log(array);


