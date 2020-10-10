const express = require('express');
const path = require('path');
const fs = require('fs');
const pug = require('pug');

const list = JSON.parse(fs.readFileSync(path.join(__dirname, '/state/list.json'), 'utf-8'));


const app = express();


app.set('view engine', 'pug');

app.use(express.static('public'));


app.get("/", (req, res) => {
  res.render(path.join(__dirname, '/public/view/index.pug'), {
    list: list
  });
})

app.delete('/', (res, req) => {

})

app.listen(4000, () => console.log('server is running'))