class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
  getCartCount() {
    return this.items.length;
  }
  getCartItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
  }
  displayCart() {
    console.log("cart items:", this.items);
    this.total = 0;
    let cartPanel = document.querySelector('#cartPanel');
    document.querySelector('#cartItems').innerHTML = '';

    for (let r = 0; r < this.items.length; r++) {
      let lineItem = document.createElement('div');
      lineItem.classList.add('lineItem');

      let prodName = document.createElement('div');
      prodName.classList.add('itemName');
      prodName.innerHTML = `<h2>${products[this.items[r].id].name}</h2>`;
      lineItem.appendChild(prodName);

      let prodPrice = document.createElement('div');
      prodPrice.classList.add('itemPrice');
      prodPrice.innerHTML = `<h2>$${products[this.items[r].id].price}</h2>`;
      lineItem.appendChild(prodPrice);

      this.total += products[this.items[r].id].price;

      document.querySelector('#cartItems').appendChild(lineItem);
    }
  if (this.items.length > 0) {
    let cartTotal = document.querySelector('#cartTotal');
    cartTotal.innerHTML = `<h1>$${this.total.toFixed(2)}</h1>`;
    } else {
      document.querySelector('#cartTotal').innerHTML = '';
    }
  }
}