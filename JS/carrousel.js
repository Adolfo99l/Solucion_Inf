// Seleccionar los elementos relevantes
const carousel = document.querySelector('.carousel');
const carouselImgs = carousel.querySelectorAll('.carousel-img');
const prevBtn = carousel.querySelector('.prev-btn');
const nextBtn = carousel.querySelector('.next-btn');

// Inicializar la imagen activa y el índice del carrusel
let activeImg = 0;

// Mostrar la imagen activa y ocultar las demás imágenes
function showImg() {
  carouselImgs.forEach(img => img.classList.remove('active'));
  carouselImgs[activeImg].classList.add('active');
}

// Evento del botón anterior
prevBtn.addEventListener('click', () => {
  activeImg--;
  if (activeImg < 0) {
    activeImg = carouselImgs.length - 1;
  }
  showImg();
});

// Evento del botón siguiente
nextBtn.addEventListener('click', () => {
  activeImg++;
  if (activeImg > carouselImgs.length - 1) {
    activeImg = 0;
  }
  showImg();
});

// Mostrar la primera imagen
showImg();

// Actualizar el tamaño de las imágenes cuando cambia el tamaño de la ventana
window.addEventListener('resize', () => {
  carouselImgs.forEach(img => img.style.height = `${carousel.offsetWidth / 3}px`);
});

// Establecer la altura inicial de las imágenes
carouselImgs.forEach(img => img.style.height = `${carousel.offsetWidth / 3}px`);
