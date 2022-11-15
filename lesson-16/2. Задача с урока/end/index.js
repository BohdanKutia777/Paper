export default function createMessenger() {
    let message = 'Just learn it!';
    let sender = 'John';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setSender(newSender) {
        sender = newSender;
    }

    function setMessage(text) {
        message = text;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    };
}