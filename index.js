const express = require
('express');
const path = require('path');


const app = express();

app.use('/assets', express.static('assets'))

app.get("/", (req, res) => {
  res.render(path.join(__dirname, '/view/index.pug'));
})

app.listen(4000, () => console.log('server is running'))