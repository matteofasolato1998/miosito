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
  if (!localStorage.getItem('lang')) {
    const browserLang = navigator.language.substring(0, 2);
    localStorage.setItem('lang', browserLang === 'it' ? 'it' : 'en');
  }

  // Reindirizza se inglese
  if (localStorage.getItem('lang') === 'en') {
    changeLanguage("en");
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



// traduzioni

// Funzione per cambiare lingua
function changeLanguage(lang) {
  if (lang === 'it') {
    // Se la lingua è italiano, ricarica la pagina
    window.location.reload();
    localStorage.setItem('lang', 'it');
    return;
  }

  localStorage.setItem('lang', 'en');

  // Trova tutti gli elementi con l'attributo data-translate
  const elements = document.querySelectorAll('[data-translate]');

  // Per ogni elemento, sostituisci il testo con la traduzione corrispondente
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'BUTTON' || element.tagName === 'A') {
        element.textContent = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });

}


// JSON con le traduzioni
const translations = {
  "en": {
    "home-title": "Matteo Fasolato - Home",
    "home-role1": "Pianist",
    "home-role2": "Producer",
    "home-role3": "Teacher",
    "home-role4": "Programmer",
    "home-button1": "Explore my albums",
    "home-button2": "Piano lessons",
    "home-contact-button": "Contact",
    "home-about-title": "Who am I?",
    "home-about-text1": "<strong>Matteo Fasolato</strong> - Born in Thiene in 1998, I am a pianist, producer and teacher active in the province of Vicenza.<br>After a classical training started at the age of ten, I dedicated myself to Blues and Jazz, graduating in <strong>Jazz Piano</strong> at the Pollini Conservatory in Padua.",
    "home-about-text2": "I studied <strong>Digital Composition</strong> and regularly publish chill, lo-fi, electronic and orchestral tracks on social media.<br>I deepen <strong>Music Production</strong> with Ableton Live and mixing/mastering courses. I teach piano, work as a producer, collaborate with advertising agencies and manage a YouTube channel with almost a thousand subscribers.",
    "home-bio-button": "Biography",
    "home-productions-title": "Productions",
    "home-explore-link": "Explore my latest projects &rarr;",
    "home-card1-title": "Orchestral Composition",
    "home-card1-desc": "Epic Orchestral Composition in Ableton Live 11",
    "home-card2-title": "Electroswing Song",
    "home-card2-desc": "Electroswing Song in FL Studio with animated video",
    "home-card3-title": "Chill Song",
    "home-card3-desc": "Chill Production in Ableton Live with the group 'Uncolored1998'",
    "home-watch-yt": "Watch on YouTube",
    "home-orchestra-tag": "Orchestra",
    "home-electronic-tag": "Electronic",
    "home-chill-tag": "Chill",
    "home-skills-title": "Skills",
    "home-skills-subtitle": "Years dedicated to music",
    "home-skill1-title": "Piano",
    "home-skill1-level": "Expert",
    "home-skill1-desc": "I've been playing piano for 12 years with classical and jazz training. I've developed a deep knowledge of modern harmony and improvisation techniques. Specialized in jazz piano and music production, I've performed concerts both as a soloist and in ensembles.",
    "home-explore-bio": "Explore my biography",
    "home-skill2-title": "Music Production",
    "home-skill2-level": "Advanced",
    "home-skill2-desc": "Expert in soundtrack production using the most modern DAWs (Ableton Live, Studio One, FL Studio). I collaborate with creative agencies for the creation of original music for short films, documentaries and multimedia content.",
    "home-explore-productions": "Explore my productions",
    "home-skill3-title": "Music Software Development",
    "home-skill3-level": "Intermediate/Advanced",
    "home-skill3-desc": "I've developed music applications for learning and perfect pitch training, combining my musical knowledge with programming skills. I use C#, React, Typescript and web frameworks to create innovative educational tools.",
    "home-explore-software": "Explore my software",
    "home-skill4-title": "Music Education",
    "home-skill4-level": "Expert",
    "home-skill4-desc": "With over 5 years of teaching experience, I've developed a method that integrates technology and music pedagogy. I teach modern piano, music theory and production to students of all levels.",
    "home-discover-lessons": "Discover my lessons",

    "bio-subtitle": "Pianist • Producer • Teacher • Programmer",
    "bio-bio1": "My name is <strong>Matteo Fasolato</strong>, I'm 26 years old and I'm a pianist and music producer from <strong>Thiene</strong>, in the province of Vicenza.",
    "bio-bio2": "I started studying music at the age of <strong>10</strong> with a private teacher, then continued my education at a music institute in my city. At <strong>16</strong> I obtained the <strong>pre-academic classical piano certification</strong> and the certification in <strong>music theory and solfeggio</strong>.",
    "bio-bio3": "At 16 I discovered a strong interest in a niche genre: <strong>Ragtime</strong>. After years of study, I became an expert in the genre, exploring the musical language of artists like <strong>Scott Joplin</strong>, <strong>Jelly Roll Morton</strong>, <strong>James P. Johnson</strong>, <strong>Eubie Blake</strong> and other pioneers of African-American music.",
    "bio-bio4": "After this phase, I approached <strong>Blues</strong> and then <strong>Jazz</strong>, enrolling at the Pollini Conservatory in Padua, where I obtained a <strong>degree in Jazz Piano</strong> in 2021, at the age of 22.",
    "bio-bio5": "During my academic period I also became passionate about the world of <strong>digital and electronic music</strong>, studying the fundamentals of sound and the use of the main <strong>DAWs</strong> and <strong>plugins</strong> available on the market.",
    "bio-bio6": "I started producing with <strong>FL Studio 12</strong>, experimenting with Trap/Rap beats, House tracks, Lo-Fi and orchestral compositions.",
    "bio-bio7": "In 2020 I attended a <strong>60-hour course on Ableton Live 10</strong>, focused on music production, mixing and sound theory.",
    "bio-bio8": "I've been producing music for over <strong>five years</strong> and in recent years I've chosen <strong>Ableton Live</strong> as my main DAW.",
    "bio-bio9": "I prefer composing <strong>orchestral pieces</strong> and <strong>soundtracks</strong>, and I continue to study and collaborate on new music projects.",
    "bio-contactButton": "Contact me for information",
    "bio-homeButton": "Back to Home 🏠",

    "lezioni-title": "Piano Lessons",
    "lezioni-subtitle": "Thiene • Schio • Dueville • Marostica • Vicenza",
    "lezioni-my-lessons": "My Lessons",
    "lezioni-intro": "Custom <strong>Piano</strong> Lessons Just for You! My lessons are structured according to each student's specific needs. <br>No monotonous and repetitive learning paths: my goal is to make you learn while having fun, with an engaging and personalized method!! <br><br>Do you want to learn a specific genre or your favorite songs quickly and effectively? Or would you prefer to compose pieces in the style of Einaudi or Yiruma? <br><br>Do you need to deepen your music theory or improve your skills with software like Studio One or Ableton 11? Whatever your goal, I can offer you lessons tailored specifically for you!",
    "lezioni-faq1-question": "How long is a lesson?",
    "lezioni-faq1-answer": "Standard lessons last 60 minutes. For younger children (5-8 years old) I recommend 45-minute lessons.",
    "lezioni-faq2-question": "What is the fee?",
    "lezioni-faq2-answer": "Single lessons cost €15 for 60 minutes. Home lessons may include a supplement based on distance.",
    "lezioni-faq3-question": "What topics are covered?",
    "lezioni-faq3-answer": "Piano technique, sheet music reading, music theory, improvisation, classical and modern repertoire, ear training and much more.",
    "lezioni-faq4-question": "Where do the lessons take place?",
    "lezioni-faq4-answer": "Lessons can take place at my studio in Thiene (VI) or online via Zoom/Skype. Upon request, it's possible to organize home lessons in the areas of Thiene, Schio, Marostica, Dueville, Vicenza and surroundings.",
    "lezioni-contact-button": "Contact me for information",
    "lezioni-home-button": "Back to Home 🏠",

    "album-hero-title": "My Music",
    "album-hero-subtitle": "Explore my discography and listen to my albums",
    "album-nav-soundtracks-title": "Soundtracks",
    "album-nav-soundtracks-desc": "Music for films and documentaries",
    "album-nav-uncolored-title": "Uncolored 1998",
    "album-nav-uncolored-desc": "Experimental project",
    "album-nav-piano-title": "Solo Piano",
    "album-nav-piano-desc": "Piano compositions",
    "album-soundtracks-title": "Soundtracks",
    "album-soundtracks-desc": "My compositions for short films, where music meets image to create unique emotions.",
    "album-ice-road-title": "Ice Road",
    "album-ice-road-desc": "Ice Road is an orchestral piece that opens with sweet melancholy, made of light strings and suspended melodies, evoking frozen and silent landscapes. Gradually, the music evolves, growing in intensity and warmth, like a light crossing the icy expanse, bringing hope and transformation.",
    "album-fire-dance-title": "Fire Dance",
    "album-fire-dance-desc": "Fire Dance is an epic and overwhelming piece, where pressing rhythms and tribal percussions intertwine with fiery melodies. A crescendo of energy and power, evoking an ancestral dance around the fire, between primordial force and warrior spirit.", "album-bassano-cafe-title": "Bassano Cafè",
    "album-bassano-cafe-desc": "Bassano Café is a warm and relaxed piece that combines lo-fi and soft jazz sounds, inspired by the intimate atmosphere of a café in the heart of Bassano del Grappa. A perfect background for slow moments, between conversations, reflections and steaming cups of coffee.",
    "album-einaudi-composition-title": "Einaudian Composition",
    "album-einaudi-composition-desc": "Composition inspired by Ludovico Einaudi's style",
    "album-uncolored-title": "Uncolored 1998",
    "album-uncolored-desc": "My project together with guitarist musician Emiliano Bez, where we explore the lo-fi genre with Asian sounds",
    "album-kyoto-title": "Kyoto",
    "album-kyoto-desc": "Instrumental lo-fi track that blends relaxed and nostalgic atmospheres with sounds inspired by the city of Kyoto",
    "album-arashiyama-title": "Arashiyama (嵐山)",
    "album-arashiyama-desc": "A sonic journey through the bamboo paths of Arashiyama. Warm lo-fi beats and natural textures blend in a serene and contemplative atmosphere, inspired by the quiet of Japanese landscapes.",
    "album-hanami-title": "Hanami 花見",
    "album-hanami-desc": "A moment suspended between falling petals and faded memories. Hanami blends lo-fi sounds and delicate melodies to evoke the poetry of cherry blossom and the ephemeral beauty of the moment.",
    "album-piano-solo-title": "Solo Piano",
    "album-piano-solo-desc": "Solo piano compositions, where I explore minimalism and lyricism, inspired by artists like Ludovico Einaudi, Tiersen, Yiruma, Sakamoto.",
    "album-miria-title": "Miria",
    "album-miria-desc": "Solo piano composition, inspired by Yiruma's Asian style",
    "album-besides-moon-title": "Besides The Moon...",
    "album-besides-moon-desc": "Solo piano composition, inspired by Ludovico Einaudi's minimalist and lyrical style.",
    "album-watch-youtube": "Watch on YouTube",
    "album-home-button": "Back to Home 🏠",

    "servizi-page-title": "Matteo Fasolato - Wedding Music and Audio Rental",
    "servizi-hero-title": "Wedding Music",
    "servizi-hero-subtitle": "Wedding Pianist • Audio Services • Equipment Rental",
    "servizi-main-title": "Make Your Special Day Unforgettable",
    "servizi-intro-text": "Music is the soul of every important celebration. With my experience as a professional pianist, I can create the perfect atmosphere for your wedding or special event.",
    "servizi-offer-intro": "I offer:",
    "servizi-offer-1": "Classical and modern repertoire for ceremony and reception",
    "servizi-offer-2": "Customized musical adaptation for every moment",
    "servizi-offer-3": "Collaboration with other musicians (violin, voice, etc.)",
    "servizi-offer-4": "Complete audio service for the entire duration of the event",
    "servizi-equipment-intro": "For those seeking autonomy in organization, I provide professional audio equipment:",
    "servizi-equipment-1": "High-power PA speakers",
    "servizi-equipment-2": "Professional wireless microphones",
    "servizi-equipment-3": "Digital mixers and complete equipment",
    "servizi-equipment-4": "Technical support for setup",
    "servizi-faq-1-question": "What is your repertoire for weddings?",
    "servizi-faq-1-answer": "From classical (Pachelbel's Canon, Wagner, Mozart) to modern (Einaudi, Yiruma, soundtracks), to pop/rock pieces on request. We can completely customize the musical selection.",
    "servizi-faq-2-question": "How much does the musical service cost?",
    "servizi-faq-2-answer": "Packages start from €100 for the ceremony (entrance music, accompaniment and exit). I offer personalized quotes based on specific needs and service duration.",
    "servizi-faq-3-question": "What does the audio rental include?",
    "servizi-faq-3-answer": "All necessary equipment: 2 PA speakers 500W, 1 wireless microphone, cables, stands and assistance for basic setup. We can provide additional equipment on request.",
    "servizi-faq-4-question": "Do you cover the entire province of Vicenza?",
    "servizi-faq-4-answer": "Yes, I operate throughout the province of Vicenza and surrounding areas. For locations beyond 30km from Thiene, a travel supplement may apply.",
    "servizi-contact-button": "Request a Personalized Quote",
    "servizi-piano-alt": "Wedding pianist",
    "servizi-speaker-alt": "Professional audio equipment",
    "servizi-mic-alt": "Professional audio equipment",
    "servizi-testimonials-title": "What they say about me",
    "servizi-testimonial-1-text": "\"Friendly and professional, he performed perfectly what we had asked him, even if they were adaptations of LOTR and other pieces. Super available even though contacted with little notice and very economical despite the quality of service. Highly recommended\"",
    "servizi-testimonial-1-author": "- Enrico, wedding in Villaverla",
    "servizi-testimonial-2-text": "\"The musicians' performances during the ceremony were simply magical. They created an atmosphere that gave goosebumps to all the guests and the compliments never stopped coming. The beauty and quality of their performances contributed enormously to making the most important moment of the day special.\"",
    "servizi-testimonial-2-author": "- Arianna, wedding in Colli Berici",
    "servizi-home-button": "Back to Home 🏠",

    "software-page-title": "Matteo Fasolato - Software",
    "software-hero-title": "My Software",
    "software-hero-subtitle": "Innovative solutions that combine music and technology",
    "software-perfectpitch-title": "Perfect Pitch",
    "software-perfectpitch-description": "Interactive software for training and recognition of notes, intervals, and chord types.<br>Including statistics and personalized settings",
    "software-perfectpitch-tech-title": "Technologies used",
    "software-perfectpitch-tech-1": "Language: C# SQL",
    "software-perfectpitch-tech-2": "Framework/Library: .NET NAudio Newtonsoft.Json",
    "software-perfectpitch-features-title": "Main features",
    "software-perfectpitch-feature-1": "Piano note recognition by listening",
    "software-perfectpitch-feature-2": "Musical interval recognition",
    "software-perfectpitch-feature-3": "Chord type recognition",
    "software-perfectpitch-feature-4": "Statistics and settings",
    "software-perfectpitch-button": "Learn more",
    "software-perfectpitch-alt": "Perfect Pitch by Matteo Fasolato",
    "software-fasotuner-title": "Faso Tuner",
    "software-fasotuner-description": "This tool is designed to simulate the piano tuning process in an accurate and intuitive way. <br>Each piano key is represented with three independent strings, controllable through dedicated trackbars that allow slight pitch variations of each string, simulating the real behavior of an acoustic instrument.<br><br>• Reference tuning fork at 440 Hz, activatable via a tuning fork icon, to start with a stable reference point.<br><br>• After tuning a note, it's possible to move to the next one while keeping the previous one as acoustic reference, facilitating consistent and progressive tuning.<br><br>• The Lock key allows blocking already tuned strings, avoiding accidental changes.<br><br>• With the clip button, it's possible to move the three strings of a note simultaneously, useful for quick and uniform adjustments.<br><br>• At the end of tuning, the software allows viewing the obtained results and comparing them with statistics from previous sessions, offering useful feedback to monitor progress.",
    "software-fasotuner-tech-title": "Technologies used",
    "software-fasotuner-tech-1": "Language: C# SQL",
    "software-fasotuner-tech-2": "Framework/Library: .NET NAudio Newtonsoft.Json SQL.Client",
    "software-fasotuner-features-title": "Main features",
    "software-fasotuner-feature-1": "Note-by-note tuning process",
    "software-fasotuner-feature-2": "Ability to hear tuning via MIDI",
    "software-fasotuner-feature-3": "Statistics and settings",
    "software-fasotuner-button": "Learn more",
    "software-fasotuner-alt": "Faso Tuner by Matteo Fasolato",
    "software-home-button": "Back to Home 🏠",

    "modal-email-title": "Contact me via email",
    "modal-copy-button": "Copy",
    "modal-copy-feedback": "Email copied to clipboard!",
    "modal-instagram-title": "Contact me on Instagram",
    "modal-instagram-button": "Go",
    "modal-instagram-description": "Send me a DM or follow me for updates",

    "nav-biografia": "Biography",
    "nav-lezioni": "Lessons",
    "nav-album": "Album",
    "nav-servizi": "Services",
    "nav-software": "Software",
    "nav-contatta": "Contact",

    "footer-motto": "Pianist • Producer • Teacher • Programmer",
    "footer-explore": "Explore",
    "footer-home": "Home",
    "footer-biografia": "Biography",
    "footer-lezioni": "Lessons",
    "footer-album": "Albums",
    "footer-resources": "Resources",
    "footer-servizi": "Services",
    "footer-software": "Software",
    "footer-contatta": "Contact",
    "footer-newsletter": "Newsletter",
    "footer-comingsoon": "Coming soon . . .",
    "footer-copyright": "© 2025 matteofasolato.com - All rights reserved",
    "footer-note": "This is a static website, it does not use cookies and does not collect personal data"
  },
};