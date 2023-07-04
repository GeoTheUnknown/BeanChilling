let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

// nav bg color change

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

window.addEventListener("scroll", change);

// Popup window
const showBtns = document.getElementsByClassName('show-description-btn');
const descriptions = document.getElementsByClassName('menu-description');
const closeBtns = document.getElementsByClassName('close-btn');

function showDescription(index) {
  descriptions[index].style.display = 'block';
  document.documentElement.style.overflow = 'hidden';
}

function hideDescription(index) {
  descriptions[index].style.display = 'none';
  document.documentElement.style.overflow = 'auto'; 
}

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', function() {
    showDescription(i);
  });

  closeBtns[i].addEventListener('click', function() {
    hideDescription(i);
  });
}

window.addEventListener('click', (event) => {
  for (let i = 0; i < descriptions.length; i++) {
    if (event.target === descriptions[i]) {
      hideDescription(i);
    }
  }
});


const products = [
  { id: 1, name: 'Coffee Jelly', price: 10, image: 'img/menu-1.jpg' },
  { id: 2, name: 'Iced Black Coffee', price: 15, image: 'img/menu-2.jpg' },
  { id: 3, name: 'Iced Caramel Macchiato', price: 20, image: 'img/menu-3.jpg' },
  { id: 4, name: 'Iced Cappuccino', price: 25, image: 'img/menu-4.jpg' },
  { id: 5, name: 'Iced Latte', price: 30, image: 'img/menu-5.jpg' },
  { id: 6, name: 'Iced Mocha', price: 35, image: 'img/menu-6.jpg' },
  { id: 7, name: 'Iced Coffee with Milk', price: 40, image: 'img/menu-7.jpg' }
];

const cartItems = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
  }
  renderCartItems();
  calculateTotalPrice();
}

function toggleCart() {
  const cart = document.getElementById('cart');
  cart.classList.toggle('open');

  if (cart.classList.contains('open')) {
    renderCartItems();
    calculateTotalPrice();
  } else {
    clearCartItems();
    clearTotalPrice();
  }
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  clearCartItems();
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    cartItemElement.appendChild(itemImage);

    const itemDetailsElement = document.createElement('div');
    itemDetailsElement.classList.add('cart-item-details');

    const itemNameElement = document.createElement('div');
    itemNameElement.classList.add('cart-item-name');
    itemNameElement.innerText = item.name;
    itemDetailsElement.appendChild(itemNameElement);

    const itemPriceElement = document.createElement('div');
    itemPriceElement.classList.add('cart-item-price');
    itemPriceElement.innerText = `₱${(item.price * item.quantity).toFixed(2)}`;
    itemDetailsElement.appendChild(itemPriceElement);

    const quantityContainer = document.createElement('div');
    quantityContainer.classList.add('cart-item-quantity');

    const quantityLabel = document.createElement('label');
    quantityLabel.classList.add('quantity-label');
    quantityLabel.innerText = 'Quantity:';
    quantityContainer.appendChild(quantityLabel);

    const minusBtn = document.createElement('button');
    minusBtn.classList.add('quantity-btn');
    minusBtn.innerText = '-';
    minusBtn.addEventListener('click', () => {
      if (item.quantity > 0) {
        item.quantity--;
        renderCartItems();
        calculateTotalPrice();
      }
    });
    quantityContainer.appendChild(minusBtn);

    const quantityValue = document.createElement('span');
    quantityValue.innerText = item.quantity;
    quantityContainer.appendChild(quantityValue);

    const plusBtn = document.createElement('button');
    plusBtn.classList.add('quantity-btn');
    plusBtn.innerText = '+';
    plusBtn.addEventListener('click', () => {
      item.quantity++;
      renderCartItems();
      calculateTotalPrice();
    });
    quantityContainer.appendChild(plusBtn);

    itemDetailsElement.appendChild(quantityContainer);

    cartItemElement.appendChild(itemDetailsElement);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('close-btn');
    removeBtn.innerText = 'X';
    removeBtn.addEventListener('click', () => {
      const itemIndex = cartItems.indexOf(item);
      if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
        renderCartItems();
        calculateTotalPrice();
      }
    });
    cartItemElement.appendChild(removeBtn);

    cartItemsContainer.appendChild(cartItemElement);
  });
}

  function clearCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
}

function calculateTotalPrice() {
  const totalPriceElement = document.getElementById('total-price');
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  totalPriceElement.innerText = `Total Price: ₱${totalPrice.toFixed(2)}`;
}

function clearTotalPrice() {
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.innerText = '';
}
