let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active'); 
    }
  });

  if (currentSlide === 0) {
    // prevButton.style.display = 'none'; 
  } else {
    prevButton.style.display = 'block'; 
  }

  if (currentSlide === slides.length - 1) {
  } else {
    nextButton.style.display = 'block'; 
  }
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}


showSlide(currentSlide);
