// scriptNote.js
document.addEventListener('DOMContentLoaded', function () {
    const noteMusicali = ['♪', '♫', '♩', '♬'];
    const contenitore = document.getElementById('contenitore-note');

    function creaNota() {
        const nota = document.createElement('div');
        nota.className = 'nota-musicale';

        const simbolo = noteMusicali[Math.floor(Math.random() * noteMusicali.length)];
        nota.textContent = simbolo;

        const left = Math.random() * contenitore.clientWidth;
        const top = Math.random() * contenitore.clientHeight;

        nota.style.left = `${left}px`;
        nota.style.top = `${top}px`;

        const durata = 2 + Math.random() * 3;
        const delay = Math.random() * 5;

        nota.style.animationDuration = `${durata}s`;
        nota.style.animationDelay = `${delay}s`;


        const size = 16 + Math.random() * 32;
        nota.style.fontSize = `${size}px`;

        nota.style.color = '#FFFFFF'; // Corretto: 6 F invece di 7
        contenitore.appendChild(nota);

        setTimeout(() => {
            nota.remove();
        }, (durata + delay) * 1000);
    }

    // Avvia l'animazione
    setInterval(creaNota, 300);

    // Note iniziali
    for (let i = 0; i < 15; i++) {
        setTimeout(creaNota, i * 200);
    }
});