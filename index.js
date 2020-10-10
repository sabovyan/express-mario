const express = require
('express');
const path = require('path');
const fs = require('fs');



const app = express();

app.use('/assets', express.static('assets'))

app.get("/", (req, res) => {
  const list = JSON.parse(fs.readFileSync(path.join(__dirname, '/state/list.json'), 'utf-8'));
  res.render(path.join(__dirname, '/view/index.pug'), {
    list: list
  });
})


app.listen(4000, () => console.log('server is running'))