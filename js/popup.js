const barsButton = document.getElementById('bars-button');
const popup = document.getElementById('popup');
const fade = {
    keyframes: [
        {
            opacity: 1
        },
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ],
    options: {
        duration: 100,
        iterations: 1,
        easing: "ease-in-out"
    }
};

barsButton.addEventListener('click', () => {
    barsButton.animate(fade.keyframes, fade.options);
    if (barsButton.classList.contains('fa-bars')) {
        barsButton.classList.remove('fa-bars');
        barsButton.classList.add('fa-xmark');
        popup.style.width = '8rem';
        popup.classList.remove('collapsing');
        popup.classList.add('expanding');
    } else {
        barsButton.classList.remove('fa-xmark');
        barsButton.classList.add('fa-bars');
        popup.style.width= '0';
        popup.classList.remove('expanding');
        popup.classList.add('collapsing');
    }
});