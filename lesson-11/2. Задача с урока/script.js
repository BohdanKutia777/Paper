const copyObj = obj => Object.assign({}, obj);


const obj = {
    name: "Taison",
    surname: "Fury",
    age: 18,
}

const user = copyObj(obj);

console.log(user === obj);