import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';

const timerModel = new Model();
const timerView = new View('timer');
const timerController = new Controller(timerModel, timerView);

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
  timerView.renderTasks(timerModel.getTasks());
  addAccordionButtonListeners(); 
});

function addAccordionButtonListeners() {
  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const content = button.closest('.accordion-item').querySelector('.accordion-content');
      content.classList.toggle('is-open');
    });
  });
}

document.getElementById('start-btn').addEventListener('click', () => {
  timerController.startTimer();
  addAccordionButtonListeners(); 
});

document.getElementById('pause-btn').addEventListener('click', () => {
  timerController.pauseTimer();
  addAccordionButtonListeners(); 
});

document.getElementById('stop-btn').addEventListener('click', () => {
  timerController.stopTimer();
  addAccordionButtonListeners(); 
});

document.getElementById('new-btn').addEventListener('click', () => {
  timerController.newTimer();
  addAccordionButtonListeners(); 
});



