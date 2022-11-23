const even = {
    guest : [
        { name: 'John', age: 17, email: 'example@server.com' },
        { name: 'Tom', age: 12, email: 'example@server.com' },
        { name: 'Ann', age: 27, email: 'example@server.com' },
        { name: 'Nekit', age: 18, email: 'example@server.com' },
    ],
    massege :  "Welcome to the party!",
    getInvitations () {
        return this.guest
        .filter(({age}) => age >=18)
        .map(({name,email}) => ({
            text : `Dear ${name}. ${this.massege}`,
            email,
        }));
    }
}


console.log(even.getInvitations());
