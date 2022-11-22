const user = {
    firstName : 'Anna',
    lastName : 'Doe',
    getFullName () {
        return `${this.firstName} ${this.lastName}`;
    },
}

console.log(user.getFullName());