document.addEventListener('DOMContentLoaded', () => {
  const welcomePage = document.getElementById('welcome-page');
  const namePage = document.getElementById('name-page');
  const chatPage = document.getElementById('chat-page');
  const nameForm = document.getElementById('name-form');
  const userNameInput = document.getElementById('user-name');
  const displayName = document.getElementById('display-name');
  const iframe = document.getElementById('ai-assistant');
  const spinner = document.getElementById('loading-spinner');
  const langButtons = document.querySelectorAll('.lang-btn');

  // Language selection
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.id === 'lang-english') {
        welcomePage.classList.add('hidden');
        namePage.classList.remove('hidden');
      }
    });
  });

  // Name submission
  nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = userNameInput.value.trim();
    if (name) {
      displayName.textContent = name;
      namePage.classList.add('hidden');
      chatPage.classList.remove('hidden');
    }
  });

  // Iframe loading
  iframe.onload = () => {
    spinner.style.display = 'none';
    iframe.classList.add('loaded');
  };
});