const todoInput = document.querySelector('.form__input');
const form = document.querySelector('.form');
const notify = document.querySelector('.notify');
const deleteButtons = document.querySelectorAll('.list__delete');

form.addEventListener('submit', (e) => {
  if (todoInput.value === '') {
    e.preventDefault();
    notify.textContent = 'to do nothing is not accepted';
  } else {
    notify.textContent = '';
  }
});

todoInput.addEventListener('input', () => {
  notify.textContent = '';
});

deleteButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let element;
    if (e.target.parentElement.tagName === 'A') {
      element = e.target.parentElement;
    } else if (e.target.parentElement.tagName === 'svg') {
      element = e.target.parentElement.parentElement;
    }
    const id = element.getAttribute('data-id');

    fetch(`http://localhost:4000/${id}`, {
      method: 'DELETE',
    }).catch((err) => console.log(err));
  });
});
