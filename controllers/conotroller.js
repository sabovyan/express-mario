const fs = require('fs');
const PATHS = require('../constants/paths');
const {
  findListItemById,
  setTodItemTextValueById,
  filterListById,
} = require('../helper/list.helper');

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
      list,
    });
  });

  app.post('/post', (req, res) => {
    const list = JSON.parse(fs.readFileSync(PATHS.list, 'utf-8'));
    if (req.body.todo !== '') {
      const todoItem = {
        id: getId(),
        textValue: req.body.todo,
      };

      list.push(todoItem);
      fs.writeFileSync(PATHS.list, JSON.stringify(list));
      res.redirect('/');
    }
  });

  app.delete('/:id', (req, res) => {
    const list = JSON.parse(fs.readFileSync(PATHS.list, 'utf-8'));
    const newList = filterListById(list, req.params.id);

    fs.writeFileSync(PATHS.list, JSON.stringify(newList));
    res.end('success');
  });

  app.get('/edit', (req, res) => {
    const { id } = req.cookies;
    const list = JSON.parse(fs.readFileSync(PATHS.list, 'utf-8'));

    const listItem = findListItemById(list, id);
    res.render(PATHS.editView, {
      listItem,
    });
  });
  app.post('/edit', (req, res) => {
    const { id } = req.cookies;
    const { text } = req.body;
    if (text !== '') {
      const list = JSON.parse(fs.readFileSync(PATHS.list, 'utf-8'));
      const newList = setTodItemTextValueById(list, id, text);
      fs.writeFileSync(PATHS.list, JSON.stringify(newList));
      res.redirect('/');
    }
  });
};
