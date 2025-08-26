window.addEventListener('DOMContentLoaded', () => {
  const musica = document.getElementById('musicaFundo');

  // Volume inicial
  musica.volume = 0.5;

  // Tecla "M" para pausar/reproduzir
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm') {
      if (musica.paused) {
        musica.play();
      } else {
        musica.pause();
      }
    }
  });
});
