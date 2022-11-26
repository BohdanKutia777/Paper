function User (name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function () {
    console.log(`Hi , A am ${this.name}`);
}
User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
}
User.prototype.setAge = function (newAge) {
    if(newAge >= 25) {
        this.age = newAge;
        console.log(`New photo request was sent for ${this.name}`);
    } else if (newAge > 0) {
        return newAge;
    } else {
        return false;
    }
}
const user1 = new User('John', 18);
const user2 = new User('Tom', 19);

user1.setAge(26);
user1.setAge(12);
user1.setAge(-12);
