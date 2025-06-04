document.addEventListener("DOMContentLoaded", async function () {
  await loadHTML("nav-container", "./components/nav.html");
  await loadHTML("footer-container", "./components/footer.html");
  await loadHTML("modal-contact", "./components/modal-email.html");

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


  // document.getElementById("it").addEventListener("click", () => { loadLanguage('it', elementsToTranslate) })
  // document.getElementById("en").addEventListener("click", () => { loadLanguage('en', elementsToTranslate) })
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
  document.getElementById('emailModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('emailModal').classList.add('hidden');
  document.getElementById('copyFeedback').classList.add('hidden');
}

function copyEmail() {
  const email = document.getElementById('emailText').textContent;
  navigator.clipboard.writeText(email).then(() => {
    document.getElementById('copyFeedback').classList.remove('hidden');
  });
}
