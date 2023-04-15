const imagenesMiniaturas = document.querySelectorAll('.producto-imagen-miniatura');
const imagenPrincipal = document.querySelector('.producto-imagen-principal');

for(let i = 0; i < imagenesMiniaturas.length; i++) {
  imagenesMiniaturas[i].addEventListener('click', function() {
    const rutaMiniatura = this.getAttribute('src');
    imagenPrincipal.setAttribute('src', rutaMiniatura);
  });
}
