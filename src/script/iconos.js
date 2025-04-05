// Asegúrate de que el plugin MorphSVG está cargado
gsap.registerPlugin(MorphSVGPlugin);
var morph = gsap.to("#icono", { 
    duration: 1, 
  morphSVG: "#iconos", 
  repeat: 1, 
  yoyo: false, 
  repeatDelay: 0.2,
  paused: true  // Pausar la animación inicialmente
});

// Detectar cuando el mouse entra sobre el círculo
document.getElementById("icono").addEventListener("mouseover", function() {
    morph.restart(); // Reproducir la animación
});

// (Opcional) Detectar cuando el mouse sale para volver al estado original
document.getElementById("icono").addEventListener("mouseout", function() {
    morph.reverse(); // Revertir la animación cuando el mouse sale
});

