function initCarousel() {
  let arrowRight = document.querySelector('.carousel__arrow_right'),
      arrowLeft = document.querySelector('.carousel__arrow_left'),
      carousel = document.querySelector('.carousel__inner'),
      step = carousel.offsetWidth,
      stepWidth = 0;
  
  arrowLeft.style.display = 'none';
  
  arrowRight.addEventListener('click', function() {
    stepWidth += step;
    if (stepWidth > step * 2) {
      arrowRight.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
    carousel.style.transform = `translateX(-${stepWidth}px)`;
  });

  arrowLeft.addEventListener('click', function() {
    stepWidth -= step;
    if (stepWidth === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
    carousel.style.transform = `translateX(-${stepWidth}px)`;
  });
}
