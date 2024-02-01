const nameInput = document.getElementById('my-name-input');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-button');
const chatBox = document.getElementById('chat');

sendButton.addEventListener('click', () => {
  
    const id = messageInput.length
    const sender = nameInput.value;
    const text = messageInput.value;
    const timestamp = new Date().toLocaleTimeString();
    
    console.log(message);
});

fetchMessage(){
  const message = {id, text, sender, timestamp};
};

updateMessageInChatBox = (message) => {

}

sendMessages = (message) => []