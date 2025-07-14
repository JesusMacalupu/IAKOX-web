const button = document.querySelector('.chatbot-button');
const modal = document.getElementById('modalBot');
const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const closeBtn = document.getElementById('modalBotClose');

// Mostrar modal
button?.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar al hacer click fuera
window.addEventListener('click', (e) => {
  if (!modal.contains(e.target) && e.target !== button) {
    modal.style.display = 'none';
  }
});

// Enviar mensaje
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  const userBubble = document.createElement('div');
  userBubble.className = 'user-bubble';
  userBubble.textContent = msg;
  chatBody.appendChild(userBubble);

  chatBody.scrollTop = chatBody.scrollHeight;
  userInput.value = '';

  setTimeout(() => {
    const botBubble = document.createElement('div');
    botBubble.className = 'bot-bubble';
    botBubble.textContent = 'Gracias por tu mensaje. En breve te responderé.';
    chatBody.appendChild(botBubble);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);
}