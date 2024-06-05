const chatMessages = document.querySelector('.chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let userAge;

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    addMessageToChat('user', message);
    messageInput.value = '';
    processMessage(message);
  }
}

function addMessageToChat(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processMessage(message) {
  let response;

  if (!userAge) {
    userAge = parseInt(message);
    if (isNaN(userAge)) {
      response = "Hello, this is Vaidya, your virtual assistant.Please enter a valid age.";
    } else {
      response = `Thank you for providing your age (${userAge}). How can I help you?`;
    }
  } else if (message.toLowerCase().includes('hi')) {
    response = "Hello, this is Vaidya, your virtual assistant.";
  } else if (message.toLowerCase().includes('im not feeling well')) {
    response = "I'm sorry to hear that you're not feeling well. Can you please share your symptoms?";
  } else if (message.toLowerCase().includes('i have fever and cold')) {
    response = "I suggest you to take paracetamol, drink plenty of water, avoid cold baths or showers, and also avoid drinking anything that dehydrates your body. If severe, I suggest you go to the nearest hospital.";
  } else if (message.toLowerCase().includes('i have headache')) {
    response = "I suggest you take aspirin, stay hydrated by drinking plenty of water, get enough sleep, limit caffeine and alcohol intake, and manage stress through exercise or relaxation techniques.";
  } else if (message.toLowerCase().includes('i have cold')) {
    response = "I suggest you take paracetamol for your cold, take rest, and drink lots of warm liquids.";
  } else if (message.toLowerCase().includes('i have stomach pain')) {
    response = "Is it a sharp pain, dull ache, or cramping? Sharp pains can indicate irritation, while dull aches might suggest inflammation. Cramping is often linked to gas or muscle spasms. Have you eaten anything new or unusual lately? New foods can sometimes trigger indigestion. Did you eat a lot of greasy or spicy food? These can irritate your stomach. Do you have nausea, vomiting, diarrhea, or constipation? These can all accompany a stomach ache, depending on the cause. Do you have a fever or chills? These could indicate a more serious condition. Remember, I can't diagnose your stomach ache. If your pain is severe, persistent, or accompanied by other concerning symptoms, please see a doctor. Here are some tips for soothing a mild stomach ache: Hydrate: Drink plenty of clear fluids. Rest: Give your stomach a break from digestion. Simple foods: Eat bland foods like toast, crackers, or rice. Warm compress: Apply a warm compress to your abdomen for comfort.";
  } else if (message.toLowerCase().includes('i have body pain')) {
    response = "I suggest you take aspirin if you have mild to moderate pain. If your pain is severe, I suggest you see a doctor.";
  } else if (message.toLowerCase().includes('i have heartache')) {
    response = "If your headache is severe and sudden, accompanied by fever, nausea, or confusion, doesn't improve with over-the-counter medication, or happens frequently, see a doctor to rule out any underlying conditions.";
  } else if (message.toLowerCase().includes('thank you')) {
    response = "hope you get well soon.";
  } else {
    response = "I'm sorry, I didn't understand your message. Could you please rephrase or provide more context?";
  }

  setTimeout(() => {
    addMessageToChat('bot', response);
  }, 1000);
}
