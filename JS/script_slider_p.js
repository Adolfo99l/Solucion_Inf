/* Inicializa el índice del slide en 1 y muestra el primer slide */
var slideIndex = 1;
showSlides(slideIndex);

/* Función que incrementa o decrementa el índice del slide */
function plusSlides(n) {
  showSlides((slideIndex += n));
}

/* Función que muestra el slide especificado por su índice */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Función que oculta todas las imágenes excepto la que tiene el índice especificado */
function showSlides(n) {
  var i;
  var slides = document
    .getElementsByClassName("slider")[0]
    .getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/* Obtiene los botones previo y siguiente */
var prevButton = document.getElementsByClassName("prev")[0];
var nextButton = document.getElementsByClassName("next")[0];

/* Agrega eventos a los botones previo y siguiente */
prevButton.addEventListener("click", function () {
  plusSlides(-1);
});

nextButton.addEventListener("click", function () {
  plusSlides(1);
});
