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

//menu-box
window.addEventListener('scroll', debounce(checkVisibleElements, 100));

function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

function checkVisibleElements() {
  const gridItems = document.querySelectorAll('.menu-box');
  gridItems.forEach(item => {
    if (isElementInViewport(item)) {
      item.style.opacity = 1;
    } else {
      item.style.opacity = 0;
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


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
