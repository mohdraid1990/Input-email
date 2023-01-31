const containerE1 = document.querySelector('.container');
const btnE1 = document.querySelector('.btn');
const popupcontainerE1 = document.querySelector('.popup-container');
const iconE1 = document.querySelector('.icon');


btnE1.addEventListener('click', () => {
    containerE1.classList.add('active');
    popupcontainerE1.classList.remove('active');

});

iconE1 .addEventListener ('click', () => {
    containerE1.classList.remove('active');
    popupcontainerE1.classList.add('active');
});


