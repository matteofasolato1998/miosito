function onPageLoad() {
  if(localStorage.getItem('Lingua')===null){
    localStorage.setItem('Lingua', 'it');
  }
    changeLanguage(localStorage.getItem('Lingua'));
}

// Collega la funzione all'evento load
window.addEventListener("DOMContentLoaded", onPageLoad);


function changeLanguage(language) {
    if (language === "it") {
      localStorage.setItem('Lingua', 'it');
        document.getElementById("nav-bio").innerText = "Biografia";
        document.getElementById("nav-contact").innerText = "Contatta";
        document.getElementById("footer-email").innerHTML = "Email di Contatto: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
        document.getElementById("footer-cite").innerHTML = "<br>Questo sito è interamente statico, non usa cookie, e non riceve informazioni personali";   
        
        document.getElementById("cv-piano").innerHTML = "Suono il Piano da oltre 10 anni:";
        document.getElementById("cv-produzione").innerHTML = "Produco da molti anni con diversi musicisti";
        document.getElementById("cv-mixing").innerHTML = "Strumenti per il Mixing e manipolazione sonora";
        document.getElementById("cv-abilita").innerHTML = "Abilità";


    } else if (language === "en") {
      localStorage.setItem('Lingua', 'en');
        document.getElementById("nav-bio").innerText = "Biography";
        document.getElementById("nav-contact").innerText = "Contact";
        document.getElementById("footer-email").innerHTML = "Contact Email: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
        document.getElementById("footer-cite").innerHTML = "<br>This Site is entirely static, does not use cookies, and does not collect personal data";


        document.getElementById("cv-piano").innerHTML = "I have been playing the Piano for over a decade:";
        document.getElementById("cv-produzione").innerHTML = "I have been producing for several years with different musicians";
        document.getElementById("cv-mixing").innerHTML = "Skills about Mixing";
        document.getElementById("cv-abilita").innerHTML = "Skills";
        
    }else if (language === "es") {
      localStorage.setItem('Lingua', 'es');
      document.getElementById("nav-bio").innerText = "Biografía";
      document.getElementById("nav-contact").innerText = "Contacto";
      document.getElementById("footer-email").innerHTML = "Email de Contacto: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
      document.getElementById("footer-cite").innerHTML = "<br>Este sitio es completamente estático, no utiliza cookies y no recopila información personal";
      
      document.getElementById("cv-piano").innerHTML = "Toqué el piano durante más de 10 años:";
      document.getElementById("cv-produzione").innerHTML = "He estado produciendo durante muchos años con varios músicos";
      document.getElementById("cv-mixing").innerHTML = "Herramientas para mezcla y manipulación de sonido";
      document.getElementById("cv-abilita").innerHTML = "Habilidades";
      
        
    }else if (language === "fr") {
      localStorage.setItem('Lingua', 'fr');
      document.getElementById("nav-bio").innerText = "Biographie";
      document.getElementById("nav-contact").innerText = "Contact";
      document.getElementById("footer-email").innerHTML = "Email de Contact : <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
      document.getElementById("footer-cite").innerHTML = "<br>Ce site est entièrement statique, ne utilise pas de cookies et ne recueille pas d'informations personnelles";
      
      document.getElementById("cv-piano").innerHTML = "Je joue du piano depuis plus de 10 ans :";
      document.getElementById("cv-produzione").innerHTML = "Je produis depuis de nombreuses années avec différents musiciens";
      document.getElementById("cv-mixing").innerHTML = "Outils de mixage et de manipulation sonore";
      document.getElementById("cv-abilita").innerHTML = "Compétences";
      
        
    }
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

