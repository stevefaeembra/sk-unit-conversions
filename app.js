const pug = require("pug");
const express = require("express");
const path = require('path');
const parser = require('./parser.js');
const app = express();

const publicPath = path.join(__dirname, '../../client/public');
app.set('views','./views');
app.set('view engine','pug');
app.use('/', express.static(publicPath));
const port = process.env.PORT || 3000;

app.get("/", (req,res) => {
  res.json(parser(req.query.q));
});

app.listen(port, function () {
  console.log(`Started server on port ${port}`);
});
