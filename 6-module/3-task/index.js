import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let carousel = document.createElement('div');
    carousel.className = "carousel";
    carousel.innerHTML = `<div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner"></div>`;
    let carouselInner = carousel.querySelector('.carousel__inner');  
    for (const slide of this.slides) {
      let carouselSlide = createElement(`<div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`);
      carouselInner.append(carouselSlide);
    }
    
    let clicker = this.initCarousel(carousel);
    if (clicker) {
      return clicker();
    }

    this._elem = carousel;

    carouselInner.addEventListener('click', this.pluse);
  }

  pluse = (event) => {
    let target = event.target;
    if (target.closest('.carousel__button')) {
      let id = target.closest('[data-id]').dataset.id;
      let myEvent = new CustomEvent('product-add', {
        detail: id, 
        bubbles: true
      });
      this._elem.dispatchEvent(myEvent);
    }
  }

  initCarousel(element) {
    let carousel = element;
      
    let arrowRight = carousel.querySelector('.carousel__arrow_right');
    let arrowLeft = carousel.querySelector('.carousel__arrow_left');

    let carouselInner = carousel.querySelector('.carousel__inner');
    let lengthCarouselInner = carouselInner.querySelectorAll('.carousel__slide').length;

    let position = 1;
    arrowLeft.style.display = 'none';

    carousel.onclick = function(event) {
      let target = event.target;

      let step = carouselInner.offsetWidth;
      
      if (target.closest('.carousel__arrow_right')) {
        carouselInner.style.transform = `translateX(-${step * position}px)`;
        position += 1;
      }
      
      if (target.closest('.carousel__arrow_left')) {
        carouselInner.style.transform = `translateX(-${step*(position-2)}px)`;
        position -= 1;
      }

      switch (position) {
      case 1:
        arrowLeft.style.display = 'none';
        arrowRight.style.display = '';
        break;
        
      case lengthCarouselInner:
        arrowLeft.style.display = '';
        arrowRight.style.display = 'none';
        break;
      
      default:
        arrowLeft.style.display = '';
        arrowRight.style.display = '';
      }
    };
  }

  get elem() {
    return this._elem;
  }
}