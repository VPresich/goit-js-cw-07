const buttonReviewRef = document.querySelector('.js-leave-review-btn');
const backdropRef = document.querySelector('.backdrop');
const buttonCloseRef = document.querySelector('.close-btn');

buttonReviewRef.addEventListener('click', onOpenModal);
buttonCloseRef.addEventListener('click', onCloseModal);

// function onOpenModal () {
//   backdropRef.classList.add('is-open');
// }

// function onCloseModal() {
//   backdropRef.classList.remove('is-open');
// }

function onOpenModal () {
  document.querySelector('body').classList.add('show-backdrop');
}

function onCloseModal() {
  document.querySelector('body').classList.remove('show-backdrop');
}