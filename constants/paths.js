const path = require('path');

const PATHS = {
  mainView: '../view/index.pug',
  editView: path.join(__dirname, '/../view/edit.pug'),
  list: path.join(__dirname, '../state/list.json'),
};

module.exports = PATHS;
