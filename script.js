const chatBox = document.getElementById('chat-box');
const welcomeMessageContainer = document.getElementById('welcome-message-container');
const messageInput = document.getElementById('message-input');


const prohibitedWords = ['kill', 'murder', 'lie']; 

window.onload = () => {
    welcomeMessage();
};

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        
        const censoredMessage = censorWords(message);
        displayMessage(censoredMessage, 'sent');
        messageInput.value = ""; 
    }
}

function censorWords(message) {
    let censoredMessage = message;
    
    
    prohibitedWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi'); 
        censoredMessage = censoredMessage.replace(regex, '*****'); 
    });
    
    return censoredMessage;
}

function displayMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type); 
    messageDiv.innerHTML = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function welcomeMessage() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcome-message');
    welcomeDiv.innerHTML = "Hello, how may I help you?"; 
    
    welcomeMessageContainer.appendChild(welcomeDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
}
