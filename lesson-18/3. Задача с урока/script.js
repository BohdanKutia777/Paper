const defer = (func, ms) => {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    };
}

const user = {
    name : 'Doe',
    sayHi () {
        console.log(`Hi, I'm ${this.name}`);
    },
}

let differendHi = defer(user.sayHi, 1000);
differendHi.call({name : "Bob"});