let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3; // Change 3 to the number of slides
  updateSlider();
}

function updateSlider() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

// You can use setInterval or requestAnimationFrame for automatic scrolling
// setInterval(nextSlide, 3000); // Uncomment this line to enable automatic scrolling
