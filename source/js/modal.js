const closeModalButton = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.js-button');

function modalHandler() {
  if (openModalButton) {
    openModalButton.addEventListener('click', () => {
      modal.style.display = 'flex';
      document.body.classList.toggle('content--modal-lock');
      openModalButton.classList.add('button--disabled');
  });

    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.classList.remove('content--modal-lock');
      openModalButton.classList.remove('button--disabled');
    });
  }
}

export {modalHandler}