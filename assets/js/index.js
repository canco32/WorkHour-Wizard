const burgerMenu = document.getElementById('burger-menu');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

burgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('opened');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('opened');
});

document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        sideMenu.classList.remove('opened');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-button');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const content = button.closest('.accordion-item').querySelector('.accordion-content');
        content.classList.toggle('is-open');
      });
    });
  });