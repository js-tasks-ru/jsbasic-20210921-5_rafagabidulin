import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    let cardProduct = createElement(`<div class="card">
      <div class="card__top">
        <img src="/assets/images/products/" class="card__image" alt="product">
        <span class="card__price">€</span>
      </div>
      <div class="card__body">
        <div class="card__title"></div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
    );

    let price = cardProduct.querySelector('.card__price');
    price.innerHTML += this.product.price.toFixed(2);

    let image = cardProduct.querySelector('.card__image');
    let way = image.getAttribute('src');
    way += this.product.image;
    image.setAttribute('src', way);

    let title = cardProduct.querySelector('.card__title');
    title.innerHTML = this.product.name;

    this._elem = cardProduct;

    const button = cardProduct.querySelector('.card__button');
    button.addEventListener('click', this.plus);
  }

  plus = (event) => {
    let target = event.target;
    const myEvent = new CustomEvent('product-add', {
      detail: this.product.id,
      bubbles: true
    });
    this._elem.dispatchEvent(myEvent);
  }

  get elem() {
    return this._elem;
  }
}