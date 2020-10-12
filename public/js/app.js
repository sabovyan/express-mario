const todoInput = document.querySelector('.form__input');
const form = document.querySelector('.form');
const notify = document.querySelector('.notify');
const deleteButtons = document.querySelectorAll('.list__delete');
const editButtons = document.querySelectorAll('.list__edit');

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

function getParentElement(e) {
  let element;
  if (e.target.parentElement.tagName === 'A') {
    element = e.target.parentElement;
  } else if (e.target.parentElement.tagName === 'svg') {
    element = e.target.parentElement.parentElement;
  }

  return element;
}

function setCookie(key, value, hours) {
  const d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000);

  const expires = `expires=${d.toUTCString()}`;
  return `${key}=${value}; ${expires}; path=/`;
}

deleteButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const element = getParentElement(e);
    const id = element.getAttribute('data-id');

    fetch(`http://localhost:4000/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        notify.textContent = err.message;
      });
  });
});

editButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const element = getParentElement(e);
    const id = element.getAttribute('data-id');
    document.cookie = setCookie('id', id, 1);
  });
});
