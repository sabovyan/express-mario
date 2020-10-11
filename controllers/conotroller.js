const path = require('path');
const fs = require('fs');
const paths = require('../constants/paths');
const makeId = require('../utils/makeId.helper');

const getId = makeId();

module.exports = (app) => {
  app.get('/', (req, res) => {
    const list = JSON.parse(
      fs.readFileSync(path.join(__dirname, paths.list), 'utf-8')
    );
  
    res.render(paths.mainView, {
      list: list,
    });
  });
  
  app.post('/', (req, res) => {
    const list = JSON.parse(
      fs.readFileSync(path.join(__dirname, paths.list), 'utf-8')
    );
    if (req.body.todo !== '') {
      const todoItem = {
        id: getId(),
        textValue: req.body.todo,
        isEdit: false,
      };
     
      list.push(todoItem);
      fs.writeFileSync(path.join(__dirname, paths.list), JSON.stringify(list));
      res.redirect('/result');
    }
  });
  
  app.get('/result', (req, res) => {
    res.redirect('/');
  });
}