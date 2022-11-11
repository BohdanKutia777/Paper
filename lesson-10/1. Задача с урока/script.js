const transformToObject = arr => {
    const obj = {};
    for(let item of arr) {
        obj[item] = item;
    }
    return obj;
}
console.log(transformToObject(['a', 17.1, 'John Doe']));
