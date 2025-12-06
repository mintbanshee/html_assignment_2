let cart = new Cart();
let count = 0;


// ==============================================
// ========== Open/Close Shopping Cart ========== 

function showPanel() {
  $('#cartPanel').animate({
    top: 0
  }, 320, 'swing');
  console.log("Show Panel Triggered");
}

function hidePanel() {
  $('#cartPanel').animate({
    top: -1000
  }, 220, 'swing');
}

// ==============================================
// ============= Add Items to Cart ============== 

function addItem(idx) {
  count++;
  document.querySelector('#cartCounter').innerText = count;
  let item = new Item(idx);
  cart.addItem(item);
  cart.displayCart();
  writeToStorage();
}

// ==============================================
// =============== Local Storage ================ 

const cartItems = localStorage.getItem('cartItems');

if(cartItems) {
  let savedItems = cartItems.split(';');
  savedItems = savedItems.slice(0, savedItems.length - 1);

  for (let i = 0; i < savedItems.length; i++) {
    let item = new Item(Number(savedItems[i]));
    cart.addItem(item);
  }
count = cart.getCartCount();

  document.querySelector('#cartCounter').innerText = cart.getCartCount();
  cart.displayCart();
}

function writeToStorage() {
  let currentItems = cart.getCartItems();
  let itemData = '';
  for (let i = 0; i < currentItems.length; i++) {
    itemData += currentItems[i].getID() + ';';
  }
  localStorage.setItem('cartItems', itemData);
}

function clearCart() {
  count = 0;
  localStorage.removeItem('cartItems');
  cart.clearCart();
  document.querySelector('#cartCounter').innerText = cart.getCartCount();
  cart.displayCart();
  hidePanel();
}