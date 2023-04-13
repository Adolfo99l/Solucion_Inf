const images = document.querySelectorAll(".carousel img");
let index = 0;

function showImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  images[index].classList.add("active");
  index++;
  if (index == images.length) {
    index = 0;
  }
}

setInterval(showImage, 5000);
