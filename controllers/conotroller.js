const path = require('path');
const fs = require('fs');
const PATHS = require('../constants/paths');


const generateId = (name) => {
  let id = 0;
  
  return () => {
    id += 1;
    return `${name}${id}`
  }
}
const getUniqueId = generateId('todo_')

module.exports = (app) => {
  app.get('/', (req, res) => {
    const list = JSON.parse(
      fs.readFileSync(PATHS.list, 'utf-8')
    );
  
    res.render(PATHS.mainView, {
      list: list,
    });
  });
  
  app.post('/', (req, res) => {
    const list = JSON.parse(
      fs.readFileSync(PATHS.list, 'utf-8')
    );
    if (req.body.todo !== '') {
      const todoItem = {
        id: getUniqueId(),
        textValue: req.body.todo,
        isEdit: false,
      };
     
      list.push(todoItem);
      fs.writeFileSync(PATHS.list, JSON.stringify(list));
      res.redirect('/result');
    }
  });
  
  app.get('/result', (req, res) => {
    res.redirect('/');
  });
}