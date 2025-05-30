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


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


