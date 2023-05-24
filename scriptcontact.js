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

        document.getElementById("cont-subtitle").innerHTML = "Pianista, Compositore, Produttore";   
        document.getElementById("cont-testo").innerHTML = "Contatti per informazioni o collaborazioni";   

        

    } else if (language === "en") {
      localStorage.setItem('Lingua', 'en');
        document.getElementById("nav-bio").innerText = "Biography";
        document.getElementById("nav-contact").innerText = "Contact";
        document.getElementById("footer-email").innerHTML = "Contact Email: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
        document.getElementById("footer-cite").innerHTML = "<br>This Site is entirely static, does not use cookies, and does not collect personal data";
       
        document.getElementById("cont-subtitle").innerHTML = "Pianist, Composer, Producer";   
        document.getElementById("cont-testo").innerHTML = "Contact for collaboration or information.";   
    }else if (language === "es") {
      localStorage.setItem('Lingua', 'es');
      document.getElementById("nav-bio").innerText = "Biografía";
      document.getElementById("nav-contact").innerText = "Contacto";
      document.getElementById("footer-email").innerHTML = "Correo de Contacto: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
      document.getElementById("footer-cite").innerHTML = "<br>Este sitio es completamente estático, no utiliza cookies y no recopila información personal";
      
      document.getElementById("cont-subtitle").innerHTML = "Pianista, Compositor, Productor";
      document.getElementById("cont-testo").innerHTML = "Contacto para información o colaboraciones";
      
    }else if (language === "fr") {
      localStorage.setItem('Lingua', 'fr');
      document.getElementById("nav-bio").innerText = "Biographie";
      document.getElementById("nav-contact").innerText = "Contact";
      document.getElementById("footer-email").innerHTML = "Email de Contact : <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
      document.getElementById("footer-cite").innerHTML = "<br>Ce site est entièrement statique, ne utilise pas de cookies et ne recueille pas d'informations personnelles";
      
      document.getElementById("cont-subtitle").innerHTML = "Pianiste, Compositeur, Producteur";
      document.getElementById("cont-testo").innerHTML = "Contact pour des informations ou des collaborations";
      
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


