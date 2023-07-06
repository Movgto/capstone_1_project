const barsButton = document.getElementById('bars-button');
const popup = document.getElementById('popup');
console.log('Popup script working');

barsButton.addEventListener('click', () => {
  if (barsButton.classList.contains('fa-bars')) {
    barsButton.classList.remove('fa-bars');
    barsButton.classList.add('fa-xmark');
    popup.classList.remove('collapsing');
    popup.classList.add('expanding');
  } else {
    barsButton.classList.remove('fa-xmark');
    barsButton.classList.add('fa-bars');
    popup.classList.remove('expanding');
    popup.classList.add('collapsing');
  }
});