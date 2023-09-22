// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(senderNames, eventName) {
    const messages = [];
    for (let i = 0; i < senderNames.length; i++) {
        messages.push(`Thank you, ${senderNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(startNumber) {
    while (startNumber >= 0) {
        console.log(startNumber--);
    }
}