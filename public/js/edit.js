const editInput = document.querySelector('.edit__input');
const editError = document.querySelector('.edit__error');
const editForm = document.querySelector('.edit__form');

editForm.addEventListener('submit', (e) => {
  try {
    if (editInput.value === '') {
      e.preventDefault();
      throw new Error('it is prohibited to do nothing');
    }
  } catch (err) {
    editError.textContent = err.message;
  }
});
