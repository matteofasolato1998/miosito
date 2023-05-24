localStorage.setItem('Lingua', 'it');

function onPageLoad() {
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


        document.getElementById("home-competenze").innerText = "Pianista, Produttore, Insegnante";

        document.getElementById("home-chisono-titolo").innerText = "Chi Sono";
        document.getElementById("home-chisono-testo1").innerHTML = "<strong>Matteo Fasolato</strong> - Nato a Thiene nel 1998 sono un Pianista, Produttore, Insegnante presso Vicenza.<br> Ho cominciato gli studi all'età di dieci anni con un percorso classico e successivamente ebbi modi di approfondire la musica Blues/Jazz.<br>       Mi sono <strong>Laureato</strong> al Conservatorio Pollini di Padova in Pianoforte Jazz";
        document.getElementById("home-chisono-testo2").innerHTML = "Ho studiato <strong>Composizione Digitale</strong> e <strong>Pubblico</strong> quotidianamente canzoni chill, lo fi, elettronica e orchestrale nei miei profili social. <br>       Attualmento studio <strong>Pruduzione Musicale </strong> in ableton live e sto seguendo vari corsi di Mix e Master.";
        document.getElementById("home-chisono-biografiabtn").innerText = "Biografia";

        document.getElementById("home-playlist").innerText = "Mie Canzoni";
        document.getElementById("home-playlist-orchestra").innerText = "Composizione Epica Orchestrale in Ableton Live 11";
        document.getElementById("home-playlist-elettro").innerText = "Canzone Elettroswing in Fl Studio con video animato.";
        document.getElementById("home-playlist-chill").innerText = "Produzione Chill in Ableton Live nel gruppo 'Uncolored1998'";
        document.getElementById("home-playlist-orchestra-title").innerText = "Composizione Orchestrale";
        document.getElementById("home-playlist-elettro-title").innerText = "Canzone Elettroswing";
        document.getElementById("home-playlist-chill-title").innerText = "Produzione Chill";

        document.getElementById("home-competenze-title").innerText = "Competenze";
        document.getElementById("home-competenze-subtitle").innerText = "Anni di Esperienza con la Musica";
        document.getElementById("home-competenze-dettagli").innerText = "Dettagli";
        document.getElementById("home-competenze-dettagli2").innerText = "Dettagli";
        document.getElementById("home-competenze-dettagli3").innerText = "Dettagli";
        document.getElementById("home-competenze-piano").innerText = "Suono da molti anni e riesco a eseguire ogni genere musicale";
        document.getElementById("home-competenze-pruduzione-title").innerText = "Produzione";
        document.getElementById("home-competenze-pruduzione").innerText = "Produco vari tipi di musica e per vari Artisti";
        document.getElementById("home-competenze-mixing").innerText = "Conosco gli strumenti per ottenere un suono di buona qualità";

       


    } else if (language === "en") {
      localStorage.setItem('Lingua', 'en');
        document.getElementById("nav-bio").innerText = "Biography";
        document.getElementById("nav-contact").innerText = "Contact";
        document.getElementById("footer-email").innerHTML = "Contact Email: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
        document.getElementById("footer-cite").innerHTML = "<br>This Site is entirely static, does not use cookies, and does not collect personal data";
       

        document.getElementById("home-competenze").innerText = "Pianist, Producer, Teacher";

        document.getElementById("home-chisono-titolo").innerText = "About Me";
        document.getElementById("home-chisono-testo1").innerHTML = "<strong>Matteo Fasolato</strong> - Born in Thiene in 1998 I am a pianist, producer and teacher press Vicenza.<br>        I began to study at the age of 10, starting with a classical path and then moving on to Blues music, Jazz.<br>        I <strong>Graduated</strong>from Pollini Conservatory of Padua in Jazz Piano.";
        document.getElementById("home-chisono-testo2").innerHTML = "I studied <strong>digital composition</strong> and I<strong> Post</strong> chill, lo fi, electronic music and soundtracks        with my social channels. <br>        Currently I study <strong>music production</strong> in ableton live and I follow various mix & master courses. ";
        document.getElementById("home-chisono-biografiabtn").innerText = "Biography";

        document.getElementById("home-playlist").innerText = "My Song";
        document.getElementById("home-playlist-orchestra").innerText = "Epic Orchestral Soundtrack Composition in Ableton Live 11";
        document.getElementById("home-playlist-elettro").innerText = "Elettroswing made in Fl Studio with a cartoon video.";
        document.getElementById("home-playlist-chill").innerText = "Chill music in Ableton Live with 'Uncolored1998'";
        document.getElementById("home-playlist-orchestra-title").innerText = "Orchestral Composition";
        document.getElementById("home-playlist-elettro-title").innerText = "Elettroswing Song";
        document.getElementById("home-playlist-chill-title").innerText = "Chill Production";

        document.getElementById("home-competenze-title").innerText = "My Skills";
        document.getElementById("home-competenze-subtitle").innerText = "Years of Experience with Music";
        document.getElementById("home-competenze-dettagli").innerText = "Details";
        document.getElementById("home-competenze-dettagli2").innerText = "Details";
        document.getElementById("home-competenze-dettagli3").innerText = "Details";
        document.getElementById("home-competenze-piano").innerText = "I have been playing for many years and I can do any kind of musical genre";
        document.getElementById("home-competenze-pruduzione-title").innerText = "Productions";
        document.getElementById("home-competenze-pruduzione").innerText = "I Pruduce various kinds of music and for different Artists";
        document.getElementById("home-competenze-mixing").innerText = "I know the Tools to render a good sound quality";

    
      } else if (language === "es") {
        localStorage.setItem('Lingua', 'es');
        document.getElementById("nav-bio").innerText = "Biografía";
        document.getElementById("nav-contact").innerText = "Contacto";
        document.getElementById("footer-email").innerHTML = "Email de contacto: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Correo</a>";
        document.getElementById("footer-cite").innerHTML = "<br>Este sitio es completamente estático, no utiliza cookies y no recopila información personal.";
        
        document.getElementById("home-competenze").innerText = "Pianista, Productor, Profesor";
        
        document.getElementById("home-chisono-titolo").innerText = "Quién Soy";
        document.getElementById("home-chisono-testo1").innerHTML = "<strong>Matteo Fasolato</strong> - Nacido en Thiene en 1998, soy un pianista, productor y profesor en Vicenza.<br> Comencé mis estudios a los diez años con una formación clásica y posteriormente tuve la oportunidad de profundizar en la música blues/jazz.<br> Me gradué en el Conservatorio Pollini de Padua en piano jazz.";
        document.getElementById("home-chisono-testo2").innerHTML = "Estudié <strong>Composición Digital</strong> y <strong>Público</strong> diariamente canciones chill, lo-fi, electrónicas y orquestales en mis perfiles sociales.<br> Actualmente estoy estudiando <strong>Producción Musical</strong> en Ableton Live y estoy siguiendo varios cursos de mezcla y masterización.";
        document.getElementById("home-chisono-biografiabtn").innerText = "Biografía";
        
        document.getElementById("home-playlist").innerText = "Mis Canciones";
        document.getElementById("home-playlist-orchestra").innerText = "Composición Épica Orquestal en Ableton Live 11";
        document.getElementById("home-playlist-elettro").innerText = "Canción de Electroswing en FL Studio con video animado.";
        document.getElementById("home-playlist-chill").innerText = "Producción Chill en Ableton Live en el grupo 'Uncolored1998'";
        document.getElementById("home-playlist-orchestra-title").innerText = "Composición Orquestal";
        document.getElementById("home-playlist-elettro-title").innerText = "Canción de Electroswing";
        document.getElementById("home-playlist-chill-title").innerText = "Producción Chill";
        
        document.getElementById("home-competenze-title").innerText = "Competencias";
        document.getElementById("home-competenze-subtitle").innerText = "Años de experiencia con la música";
        document.getElementById("home-competenze-dettagli").innerText = "Detalles";
        document.getElementById("home-competenze-dettagli2").innerText = "Detalles";
        document.getElementById("home-competenze-dettagli3").innerText = "Detalles";
        document.getElementById("home-competenze-piano").innerText = "Toco desde hace muchos años y puedo tocar cualquier género musical.";
        document.getElementById("home-competenze-pruduzione-title").innerText = "Producción";
        document.getElementById("home-competenze-pruduzione").innerText = "Produzco varios tipos de música y para varios artistas.";
        document.getElementById("home-competenze-mixing").innerText = "Conozco las herramientas para obtener un sonido de buena calidad.";
        

      }else if (language === "fr") {
        localStorage.setItem('Lingua', 'fr');
        document.getElementById("nav-bio").innerText = "Biographie";
        document.getElementById("nav-contact").innerText = "Contact";
        document.getElementById("footer-email").innerHTML = "Email de contact : <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
        document.getElementById("footer-cite").innerHTML = "<br>Ce site est entièrement statique, ne utilise pas de cookies et ne collecte pas d'informations personnelles.";

        document.getElementById("home-competenze").innerText = "Pianiste, Producteur, Enseignant";

        document.getElementById("home-chisono-titolo").innerText = "Qui suis-je";
        document.getElementById("home-chisono-testo1").innerHTML = "<strong>Matteo Fasolato</strong> - Né à Thiene en 1998, je suis un pianiste, producteur et enseignant à Vicenza.<br> J'ai commencé mes études à l'âge de dix ans avec une formation classique, puis j'ai eu l'occasion d'approfondir la musique blues/jazz.<br> J'ai obtenu mon diplôme du Conservatoire Pollini de Padoue en piano jazz.";
        document.getElementById("home-chisono-testo2").innerHTML = "J'ai étudié la <strong>Composition Numérique</strong> et je publie quotidiennement des chansons chill, lo-fi, électroniques et orchestrales sur mes profils sociaux.<br> Actuellement, j'étudie la <strong>Production Musicale</strong> sur Ableton Live et je suis plusieurs cours de mixage et de mastering.";
        document.getElementById("home-chisono-biografiabtn").innerText = "Biographie";

        document.getElementById("home-playlist").innerText = "Mes Chansons";
        document.getElementById("home-playlist-orchestra").innerText = "Composition Orchestrale Épique sur Ableton Live 11";
        document.getElementById("home-playlist-elettro").innerText = "Chanson Electroswing sur FL Studio avec vidéo animée.";
        document.getElementById("home-playlist-chill").innerText = "Production Chill sur Ableton Live dans le groupe 'Uncolored1998'";
        document.getElementById("home-playlist-orchestra-title").innerText = "Composition Orchestrale";
        document.getElementById("home-playlist-elettro-title").innerText = "Chanson Electroswing";
        document.getElementById("home-playlist-chill-title").innerText = "Production Chill";

        document.getElementById("home-competenze-title").innerText = "Compétences";
        document.getElementById("home-competenze-subtitle").innerText = "Années d'expérience avec la musique";
        document.getElementById("home-competenze-dettagli").innerText = "Détails";
        document.getElementById("home-competenze-dettagli2").innerText = "Détails";
        document.getElementById("home-competenze-dettagli3").innerText = "Détails";
        document.getElementById("home-competenze-piano").innerText = "Je joue depuis de nombreuses années et je peux jouer tous les genres musicaux.";
        document.getElementById("home-competenze-pruduzione-title").innerText = "Production";
        document.getElementById("home-competenze-pruduzione").innerText = "Je produis différents types de musique pour divers artistes.";
        document.getElementById("home-competenze-mixing").innerText = "Je connais les outils pour obtenir un son de bonne qualité.";

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