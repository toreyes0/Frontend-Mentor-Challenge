const categories = document.querySelectorAll('.category');
const dropdowns = document.querySelectorAll('.dropdown');
const menu = document.querySelector('#menu');
const hamburgerMenu = document.querySelector('#hamburger-menu');

categories.forEach((category) => {
  category.addEventListener('click', (e) => {
    // close earlier dropdown
    dropdowns.forEach((dropdown) => {
      if (e.currentTarget.nextElementSibling != dropdown) {
        dropdown.style.display = 'none';
        dropdown.parentElement.children[0].children[1].style.transform = '';
      }
    });
    // assign styles
    if (e.currentTarget.nextElementSibling.style.display === '' ||
        e.currentTarget.nextElementSibling.style.display === 'none') {
      e.currentTarget.nextElementSibling.style.display = 'block';
      e.currentTarget.children[1].style.transform = 'rotate(180deg)';
    } else {
      e.currentTarget.nextElementSibling.style.display = 'none';
      e.currentTarget.children[1].style.transform = '';
    }
  });
});

hamburgerMenu.addEventListener('click', (e) => {
  if (menu.style.display === 'flex') {
    e.target.src = `${window.location}images/icon-hamburger.svg`;
    menu.style.display = 'none';
  } else {
    e.target.src = `${window.location}images/icon-close.svg`;
    menu.style.display = 'flex';
  }
});
