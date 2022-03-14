const newMessage = document.getElementById("new_message");
const message = document.getElementById("message");

const messages = [
    "You're pretty neat.",                                          //0
    "Someone probably think's you're great, I'm sure.",             //1
    "Like your mom probably says nice things about you.",           //2
    "Maybe even your dad",                                          //3
    "You don't smell that bad, like it could be worse.",            //4
    "You're alive at least, right?",                                //5
    "I bet you have... like... eyes, that's something.",            //6
    "I'm sure you have nice shoes... Or just shoes, at least...",   //7
    "Um, skin? You probably have all of your skin",                 //8
    "At least a few teeth",                                         //9            
    "Really?",                                                      //10
    "Okay... I'm sure there's worse people out there",              //11
    "Ugh, do you have all your toes? That's neat, right?",          //12
    "Fingers?",                                                     //13
    "Seriously?",                                                   //14
    "...",                                                          //15
    "You need to stop",                                             //16
    "You're still pretty great but I'm done",                       //17
    "Really, I'm done now",                                         //18
    "",                                                             //19
    "",                                                             //20
    "...",                                                          //21
    "STOP!"                                                         //22
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

let nextIndex = 0;
const nextMessage = () => {
    message.innerHTML = messages[nextIndex];

    if(nextIndex === 22){
        newMessage.style.display = "none";
    } else if (nextIndex > 16) {
        newMessage.value = "more?";
        newMessage.style.cursor = "help";
    } else if (nextIndex > 10) {
        newMessage.value = "More!";
    } else if (nextIndex === 10) {
        newMessage.value = "Yeah!";
    } else {
        newMessage.value = "Next Message!"
    }

    nextIndex++;
}


newMessage.addEventListener('click', nextMessage);