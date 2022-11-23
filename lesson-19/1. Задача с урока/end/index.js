export const event = {
    message: 'Welcome to Christmas Party',
    guests: [
        { email: 'tom.h@gmail.com', name: 'Tom', age: 17 },
        { email: 'champ@gmail.com', name: 'Bob', age: 19 },
    ],
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                message: `Dear ${name}! ${this.message}`,
                email
            }));
    },
};