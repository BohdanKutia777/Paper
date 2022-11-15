let massage = "Just learn it!";
let sender = "Yuor Jonh";
const sendMessage = (name) => {
    return `${name}, ${massage} ${sender}`;
}
const setMessage = text => {
    massage = text;
    return massage;
}
console.log(sendMessage('Ann'));
setMessage('Good job!');

console.log(sendMessage('Ann'));

