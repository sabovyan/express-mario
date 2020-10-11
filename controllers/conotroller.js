const path = require('path');
const fs = require('fs');
const PATHS = require('../constants/paths');

const generateId = (name) => {
  let id = 0;
  return () => {
    id += 1;
    return `${name}${id}`;
  };
};
const getId = generateId('todo_');

module.exports = (app) => {
  app.get('/', (req, res) => {
    const list = JSON.parse(fs.readFileSync(PATHS.list, 'utf-8'));

    res.render(PATHS.mainView, {
      list: list,
    });
  });

  app.post('/post', (req, res) => {
    const list = JSON.parse(fs.readFileSync(PATHS.list, 'utf-8'));
    if (req.body.todo !== '') {
      const todoItem = {
        id: getId(),
        textValue: req.body.todo,
        isEdit: false,
      };

      list.push(todoItem);
      fs.writeFileSync(PATHS.list, JSON.stringify(list));
      res.redirect('/');
    }
  });

  app.delete('/:id', (req, res) => {
    console.log(req.params.id);
    console.log(res.body);
    const list = JSON.parse(fs.readFileSync(PATHS.list, 'utf-8'));
    const newList = list.filter((li) => li.id !== req.params.id);
    fs.writeFileSync(PATHS.list, JSON.stringify(newList));
    res.redirect('/');
  });
};
