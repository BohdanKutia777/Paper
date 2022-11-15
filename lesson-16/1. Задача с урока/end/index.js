let message = 'Just learn it';

export function sendMessage(name) {
    let sender = 'John';

    console.log(`${name}, ${message}! Your ${sender}`);
}

export function setMessage(newMessage) {
    message = newMessage;
}