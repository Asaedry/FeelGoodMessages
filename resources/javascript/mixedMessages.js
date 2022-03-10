const newMessage = document.getElementById("new_message");
const message = document.getElementById("message");

const messages = [
    "You're kinda neat.",
    "Someone probably think's you're great, I'm sure.",
    "You don't smell that bad, like it could be worse.",
    "You're alive at least, right?",
    "I bet you have... like... eyes, that's something.",
    "I'm sure you have nice shoes... Or just shoes, at least...",
    "Your mom probably says nice things about you."
]

let lastNum = null; 
const randomMessage = () => {
    let num = Math.floor(Math.random() * messages.length);
    if(lastNum != num){
        message.innerHTML = messages[num];
        lastNum = num   
    } else {
        randomMessage();
    }
}


newMessage.addEventListener('click', randomMessage);