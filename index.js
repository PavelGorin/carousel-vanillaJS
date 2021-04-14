let slideNum = 1;

showSlides(slideNum);

function toggleSlide(n) {
  showSlides(slideNum += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".carousel__slide");

  if (n > slides.length) { slideNum = 1 }

  if (n < 1) { slideNum = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideNum - 1].style.display = "block";
}