// controlla se esiste la lingua nel localstorage
if(sessionStorage.getItem('lingua')===null){
  sessionStorage.setItem('lingua', 'it');
}

const elementsToTranslate = document.querySelectorAll('[data-translate]');

loadLanguage(sessionStorage.getItem('lingua'));

function loadLanguage(language) {
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
