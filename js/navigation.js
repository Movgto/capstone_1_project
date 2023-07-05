let currentPage = 'home';

const navButtons = document.querySelectorAll('#desktop-menu li');
const popupButtons = document.querySelectorAll('#popup-list li');
const main = document.querySelector('main');
const about = document.querySelector('#about');

const navHandler = (e) => {
  const name = e.target.innerText;

  switch (name) {
    case 'About':
      if (currentPage !== 'about') {
        currentPage = 'about';
        main.classList.toggle('unactive');
        about.classList.toggle('unactive');
      }
      break;

    case 'Home':
      if (currentPage !== 'home') {
        currentPage = 'home';
        main.classList.toggle('unactive');
        about.classList.toggle('unactive');
      }
      break;

    default:
      break;
  }
};

navButtons.forEach((item) => {
  item.addEventListener('click', navHandler);
});

popupButtons.forEach((item) => {
  item.addEventListener('click', navHandler);
});