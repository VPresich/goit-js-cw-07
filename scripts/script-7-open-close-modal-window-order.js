const btnOpenForm = document.querySelector('.js-open-form-btn');
const modalBackdrop = document.querySelector('.modal-backdrop');
const buttonClose = document.querySelector('.close-button');


btnOpenForm.addEventListener('click', onOpenModal);
buttonClose.addEventListener('click', onCloseModal);
modalBackdrop.addEventListener('click', onBackdropClick);

// function onOpenModal () {
//   modalBackdrop.classList.add('is-open');
// }

// function onCloseModal() {
//   modalBackdrop.classList.remove('is-open');
// }

// После просмотра лекции 

function onOpenModal(event) { 
  document.querySelector('body').classList.add('show-modal-backdrop'); 
  window.addEventListener('keydown', onWindowKeydown);
  
}

function onCloseModal(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  document.querySelector('body').classList.remove('show-modal-backdrop');  
}

function onBackdropClick(event) {    
  if (event.currentTarget === event.target) {  
    onCloseModal(event);
  }
}

function onWindowKeydown(event) {  
  const KEY_CODE_ESC = "Escape";
  if (event.code == KEY_CODE_ESC) {
    onCloseModal(event);
  }
}