class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi () {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto () {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge (newAge) {
        if(newAge >= 25) {
            this.age = newAge;
            console.log(`New photo request was sent for ${this.name}`);
        } else if (newAge > 0) {
            return newAge;
        } else {
            return false;
        }
    }

    static creatyEmpty () {
        return new this('', null);
    }
}