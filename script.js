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
  const themeToggle = document.getElementById('theme-toggle');
  const logoutBtn = document.getElementById('logout-btn');
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackModal = document.getElementById('feedback-modal');

  let selectedLanguage = 'english';

  // Language selection
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedLanguage = button.id.split('-')[1];
      if (selectedLanguage !== 'english') {
        alert(`${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} support is coming soon. Proceeding in English.`);
      }
      welcomePage.classList.add('hidden');
      namePage.classList.remove('hidden');
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
      logoutBtn.classList.remove('hidden');
      // Dynamically set iframe src
      iframe.src = 'https://sx0tp9vv.chat.qbusiness.ap-southeast-2.on.aws/';
    }
  });

  // Iframe loading with error handling
  iframe.onload = () => {
    spinner.style.display = 'none';
    iframe.classList.add('loaded');
    iframe.classList.remove('opacity-0');
  };
  iframe.onerror = () => {
    spinner.style.display = 'none';
    alert('Failed to load the chat assistant. This may be due to cookie restrictions, browser settings, or server policies. Please ensure third-party cookies are enabled and try again.');
  };

  // Dark mode toggle
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });

  // Logout
  logoutBtn.addEventListener('click', () => {
    chatPage.classList.add('hidden');
    welcomePage.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
    userNameInput.value = '';
    displayName.textContent = '';
  });

  // Cookie consent modal
  window.openCookieConsentModal = () => {
    if (/Mobi|Android|iPhone|iPad/.test(navigator.userAgent)) {
      feedbackModal.classList.add('hidden');
      document.getElementById('cookie-consent-modal').classList.remove('hidden');
    }
  };

  window.closeCookieConsentModal = () => {
    document.getElementById('cookie-consent-modal').classList.add('hidden');
  };

  // Show cookie consent modal on mobile devices
  openCookieConsentModal();

  // Feedback modal
  window.openFeedbackModal = () => {
    document.getElementById('cookie-consent-modal').classList.add('hidden');
    feedbackModal.classList.remove('hidden');
  };

  window.closeFeedbackModal = () => {
    feedbackModal.classList.add('hidden');
  };

  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback-text').value.trim();
    if (feedback) {
      alert('Thank you for your feedback!');
      closeFeedbackModal();
      document.getElementById('feedback-text').value = '';
    }
  });
});
