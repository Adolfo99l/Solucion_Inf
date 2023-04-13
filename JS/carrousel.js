$(document).ready(function() {
  // Selecciona todas las imágenes del carrusel
  var imgs = $('.carousel img');
  // Inicializa el índice de la imagen actual
  var idx = 0;
  // Establece el tiempo de espera entre las transiciones de imagen (en milisegundos)
  var interval = 5000;

  // Función para cambiar la imagen actual del carrusel
  function changeImg() {
      // Oculta la imagen actual
      imgs.eq(idx).animate({opacity: 0}, 1000);
      // Incrementa el índice de la imagen actual
      idx = (idx + 1) % imgs.length;
      // Muestra la nueva imagen
      imgs.eq(idx).animate({opacity: 1}, 1000);
  }

  // Inicia el carrusel
  var carrouselInterval = setInterval(changeImg, interval);
});
