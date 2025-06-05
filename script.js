document.addEventListener("DOMContentLoaded", async function () {
  await loadHTML("nav-container", "/components/nav.html");
  await loadHTML("footer-container", "/components/footer.html");
  await loadHTML("modal-contact", "/components/modal-email.html");

  // Gestione del menu mobile
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  // Chiudi il menu mobile quando si clicca su un link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
    });
  });

  // Imposta la lingua al primo accesso
  if (!sessionStorage.getItem('lang')) {
    const browserLang = navigator.language.substring(0, 2);
    sessionStorage.setItem('lang', browserLang === 'it' ? 'it' : 'en');
  }

  // Reindirizza se inglese
  if (sessionStorage.getItem('lang') === 'en' && !location.pathname.startsWith('/en/')) {
    location.href = '/en' + location.pathname;
  }

});


// carica componenti
async function loadHTML(elementID, fileName) {
  try {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error(`Errore nel caricamento del file ${fileName}: ${response.statusText}`);
    }
    const data = await response.text();
    document.getElementById(elementID).innerHTML = data;
  } catch (error) {
    console.error(error);
  }
}


function openModal() {
  const modal = document.getElementById('emailModal');
  modal.classList.remove('hidden');

  // Aggiungi l'event listener per il click esterno
  modal.addEventListener('click', handleOutsideClick);
}

function closeModal() {
  const modal = document.getElementById('emailModal');
  modal.classList.add('hidden');
  document.getElementById('copyFeedback').classList.add('hidden');

  // Rimuovi l'event listener per il click esterno
  modal.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
  const modalContent = document.querySelector('#emailModal > div, #emailModal > div + div');

  // Se il click è avvenuto al di fuori del contenuto della modale
  if (!modalContent.contains(event.target)) {
    closeModal();
  }
}

function copyEmail() {
  const email = document.getElementById('emailText').textContent;
  navigator.clipboard.writeText(email).then(() => {
    document.getElementById('copyFeedback').classList.remove('hidden');
  });
}

// Gestione del cambio lingua sul click bandiera
function changeLanguage(lang) {
  alert(`Language changed to ${lang}`);
  sessionStorage.setItem('language', lang);

  // Reindirizza alla versione corretta
  if (lang === 'en') {
    // Se la lingua è inglese, vai alla cartella /en/
    window.location.href = '/en' + window.location.pathname;
  } else {
    // Se la lingua è italiana, torna alla root
    window.location.href = window.location.pathname.replace('/en', '');
  }
}

