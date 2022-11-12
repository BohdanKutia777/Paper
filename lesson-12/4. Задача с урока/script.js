const getMaxAbsoluteNumber = arr => { 
    let absArr = arr.map(el => Math.abs(el));
    return Math.max(...absArr);

}

console.log(getMaxAbsoluteNumber([12.12,13,-123,132,3121,-123123]));