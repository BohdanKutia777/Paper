//Коспозиция 

const  add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

const compose = (...func) => value => {
 return func.reduce((acc, func) => func(acc), value);
};
const doEverything = compose (
    add3,
    mult2,
    div4,
);


console.log(doEverything(3));
console.log(doEverything(4));
console.log(doEverything(13));