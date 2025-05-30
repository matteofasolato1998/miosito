document.addEventListener("DOMContentLoaded", async function () {
  await loadHTML("nav-container", "./components/nav.html");
  await loadHTML("footer-container", "./components/footer.html");
  await loadHTML("player", "./components/player.html");

  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  if (sessionStorage.getItem('lingua') === null) {
    sessionStorage.setItem('lingua', 'it');
  }

  loadLanguage(sessionStorage.getItem('lingua'), elementsToTranslate);

  document.getElementById("it").addEventListener("click", () => { loadLanguage('it', elementsToTranslate) })
  document.getElementById("en").addEventListener("click", () => { loadLanguage('en', elementsToTranslate) })
  document.getElementById("fr").addEventListener("click", () => { loadLanguage('fr', elementsToTranslate) })
  document.getElementById("es").addEventListener("click", () => { loadLanguage('es', elementsToTranslate) })




  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.getElementById('closeModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const submitFormBtn = document.getElementById('submitForm');
  const contactForm = document.getElementById('contactForm');

  // Apri modale
  openModalBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  });

  // Chiudi modale
  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  closeModalBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);

  // Invia form
  submitFormBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (contactForm.checkValidity()) {
      // Qui puoi aggiungere la logica per inviare il form
      alert('Form inviato con successo!');
      closeModal();
      contactForm.reset();
    } else {
      contactForm.reportValidity();
    }
  });

  // Chiudi con ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });


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

function loadLanguage(language, elementsToTranslate) {
  fetch(`languages/${language}.json`)
    .then(response => response.json())
    .then(translations => {
      elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[key];
      });
    })
    .catch(error => console.error('Errore nel caricamento delle traduzioni:', error));
}

