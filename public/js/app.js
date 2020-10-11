const todoInput = document.querySelector('.form__input');
const form = document.querySelector('.form')
const notify = document.querySelector('.notify');


form.addEventListener('submit', (e) => {
  if(todoInput.value === "") {
    e.preventDefault()
    notify.textContent = 'to do nothing is not accepted'
  }
});

todoInput.addEventListener('input', () => {
    notify.textContent = '';
  
})