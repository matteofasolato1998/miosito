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


        document.getElementById("bio-subtitolo").innerText = "Pianista, Produttore, Insegnante";
        document.getElementById("bio-paragrafo").innerHTML = "  <p>Mi chiamo <strong>Matteo Fasolato</strong>, ho 24 anni e sono un Pianista e Produttore di Thiene, Vicenza.</p>  <p>Ho iniziato i miei studi di musica quando <strong>avevo 10 anni</strong>, con un insegnante privato e successivamente ho frequentato un istituto musicale a Thiene. All'età di 16 anni ho ottenuto la certificazione di pianoforte classico <strong>pre-accademico</strong> e la certificazione di teoria e solfeggio.</p>  <p>Dall'età di 16 anni ho focalizzato il mio interesse su un genere di nicchia, il <strong>Ragtime</strong>, facendomi diventare un esperto dopo diversi anni di studio. Gli artisti che ho approfondito sono Scott Joplin, Jelly Roll Morton, James P. Jhonson, Eubie Blake, ecc.</p> <p> Dopo aver studiato il ragtime, mi sono avvicinato al <strong>Blues</strong> e al <strong>Jazz</strong>, quindi ho frequentato il conservatorio in Pianoforte Jazz presso il Conservatorio Pollini di Padova, dove ho ottenuto una <strong>Laurea</strong> nel 2021 all'età di 22 anni.</p><p>Durante gli studi al conservatorio, mi sono interessato al mondo della musica <strong>digitale/elettronica</strong>, studiando i concetti fondamentali del suono e familiarizzando con le varie DAW e plugin disponibili sul mercato.</p> <p>Ho iniziato con Fl Studio 12, producendo semplici beat Trap/Rap fino a brani House, Lo-Fi o orchestrali.</p><p>Nel 2020 ho frequentato un corso di 60 ore su <strong>Ableton Live 10</strong>, produzione musicale, mixaggio e teoria del suono.</p> <p>Ad oggi, <strong>produco musica da 5-6 anni</strong> e negli ultimi anni ho scelto Ableton come DAW.</p> <p>Preferisco comporre <strong>brani orchestrali</strong> o <strong>colonne sonore</strong> e continuo a studiare per possibili <strong>collaborazioni</strong>.</p>";

    } else if (language === "en") {
      localStorage.setItem('Lingua', 'en');
        document.getElementById("nav-bio").innerText = "Biography";
        document.getElementById("nav-contact").innerText = "Contact";
        document.getElementById("footer-email").innerHTML = "Contact Email: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
        document.getElementById("footer-cite").innerHTML = "<br>This Site is entirely static, does not use cookies, and does not collect personal data";
       
        document.getElementById("bio-subtitolo").innerText = "Pianist, Producer, Composer";
        document.getElementById("bio-paragrafo").innerHTML = "  <p>My name is <strong>Matteo Fasolato</strong>, I'm 24 years old and I'm a Pianist, Producer from Thiene, Vicenza.</p><p>I started my studies of music when<strong> I was 10</strong>, with a private teacher and then in a music institute in Thiene. At the age of 16, I obtained <strong>pre-academic classical piano</strong> certification and theory and solfege certification.</p><p>From the age of 16, I focused my interest on a niche genre,<strong> Ragtime</strong>, which made me an expert after several years of study. The main artists I played were Scott Joplin, Jelly Roll Morton, James P. Jhonson, Eubie Blake ecc.</p> <p>After studying ragtime I approached the <strong>Blues and Jazz</strong> music, so I attended the Jazz Piano conservatory in Pollini Istitute from Padua, and I obtained a <strong>Degree</strong> in 2021 at the age of 22 years.</p><p>During the studies I was interested in <strong>electronic/digital music</strong>, then studying the fundamental concepts of sound and becoming familiar with the various Daw and plugins on the market.</p> <p>I started with Fl studio 12 with simple Trap/Rap beats up to Huose, Lo-Fi and Orchestral tracks</p><p>In 2020 I did 60-hour course about using <strong>Ableton Live 10</strong>, Producing a song, mixing and sound theory.</p> <p>To date <strong>I have been producing for 5-6 years</strong> and I have chosen Ableton as Favorite Daw.</p> <p>I prefer compose <strong>Orchestral Pieces</strong> or <strong>soundtracks</strong> and I continue to study for possible <strong>collaborations.</strong></p>";

    } else if (language === "es") {
      localStorage.setItem('Lingua', 'es');
      document.getElementById("nav-bio").innerText = "Biografía";
      document.getElementById("nav-contact").innerText = "Contacto";
      document.getElementById("footer-email").innerHTML = "Correo de contacto: <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
      document.getElementById("footer-cite").innerHTML = "<br>Este sitio es completamente estático, no utiliza cookies y no recopila información personal";
      
      document.getElementById("bio-subtitolo").innerText = "Pianista, Productor, Profesor";
      document.getElementById("bio-paragrafo").innerHTML = "  <p>Me llamo <strong>Matteo Fasolato</strong>, tengo 24 años y soy pianista y productor de Thiene, Vicenza.</p>  <p>Comencé mis estudios de música cuando <strong>tenía 10 años</strong>, con un profesor particular, y luego asistí a una escuela de música en Thiene. A los 16 años, obtuve la certificación en piano clásico <strong>pre-académico</strong> y la certificación en teoría y solfeo.</p>  <p>A partir de los 16 años, centré mi interés en un género de nicho, el <strong>Ragtime</strong>, convirtiéndome en un experto después de varios años de estudio. Los artistas que he investigado son Scott Joplin, Jelly Roll Morton, James P. Johnson, Eubie Blake, entre otros.</p> <p>Después de estudiar ragtime, me acerqué al <strong>Blues</strong> y al <strong>Jazz</strong>, y luego asistí al conservatorio de Jazz en el Conservatorio Pollini de Padua, donde obtuve una <strong>licenciatura</strong> en 2021 a los 22 años.</p><p>Durante mis estudios en el conservatorio, me interesé por el mundo de la música <strong>digital/electrónica</strong>, estudiando los conceptos fundamentales del sonido y familiarizándome con las diferentes DAW y plugins disponibles en el mercado.</p> <p>Comencé con FL Studio 12, produciendo desde simples ritmos de Trap/Rap hasta canciones de House, Lo-Fi o música orquestal.</p><p>En 2020, tomé un curso de 60 horas sobre <strong>Ableton Live 10</strong>, producción musical, mezcla y teoría del sonido.</p> <p>Hasta el día de hoy, he estado produciendo música durante 5-6 años y en los últimos años he elegido Ableton como mi DAW principal.</p> <p>Preferentemente compongo <strong>música orquestal</strong> o <strong>bandas sonoras</strong> y continúo estudiando para posibles <strong>colaboraciones</strong>.</p>";
      
    }else if (language === "fr") {
      localStorage.setItem('Lingua', 'fr');
      document.getElementById("nav-bio").innerText = "Biographie";
      document.getElementById("nav-contact").innerText = "Contact";
      document.getElementById("footer-email").innerHTML = "Adresse e-mail de contact : <a href=&quot;mailto:matteofasolato1998@gmail.com&quot; style=&quot;color:	#3b7585;&quot;>Mail</a>";
      document.getElementById("footer-cite").innerHTML = "<br>Ce site est entièrement statique, ne utilise pas de cookies et ne recueille pas d'informations personnelles";
      
      document.getElementById("bio-subtitolo").innerText = "Pianiste, Producteur, Enseignant";
      document.getElementById("bio-paragrafo").innerHTML = "  <p>Je m'appelle <strong>Matteo Fasolato</strong>, j'ai 24 ans et je suis pianiste et producteur à Thiene, Vicenza.</p>  <p>J'ai commencé mes études de musique lorsque <strong>j'avais 10 ans</strong>, avec un professeur privé, puis j'ai fréquenté une école de musique à Thiene. À l'âge de 16 ans, j'ai obtenu la certification en piano classique <strong>pré-académique</strong> ainsi que la certification en théorie et solfège.</p>  <p>À partir de l'âge de 16 ans, j'ai orienté mon intérêt vers un genre de niche, le <strong>Ragtime</strong>, devenant un expert après plusieurs années d'étude. Les artistes que j'ai approfondis sont Scott Joplin, Jelly Roll Morton, James P. Johnson, Eubie Blake, etc.</p> <p>Après avoir étudié le ragtime, je me suis intéressé au <strong>Blues</strong> et au <strong>Jazz</strong>, puis j'ai fréquenté le conservatoire de Jazz au Conservatoire Pollini de Padoue, où j'ai obtenu une <strong>licence</strong> en 2021 à l'âge de 22 ans.</p><p>Pendant mes études au conservatoire, je me suis intéressé au monde de la musique <strong>numérique/électronique</strong>, en étudiant les concepts fondamentaux du son et en me familiarisant avec les différentes DAW et plugins disponibles sur le marché.</p> <p>J'ai commencé avec FL Studio 12, en produisant des beats Trap/Rap simples jusqu'à des morceaux House, Lo-Fi ou orchestraux.</p><p>En 2020, j'ai suivi un cours de 60 heures sur <strong>Ableton Live 10</strong>, la production musicale, le mixage et la théorie du son.</p> <p>Jusqu'à aujourd'hui, je produis de la musique depuis 5-6 ans et ces dernières années j'ai choisi Ableton comme ma DAW principale.</p> <p>Je préfère composer des <strong>morceaux orchestraux</strong> ou des <strong>bandes sonores</strong> et je continue à étudier en vue de possibles <strong>collaborations</strong>.</p>";
      
    }
}


let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }


    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
