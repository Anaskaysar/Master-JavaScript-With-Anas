'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); //all of the buttons with same class
// console.log(btnOpenModal)

const openModal = function () {
    modal.classList.remove('hidden'); //passing the name of the class. Don't use dot here . Dot is for selector only
    overlay.classList.remove('hidden');

}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);//listening to key events 
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});