const express = require("express");
const app = express();
PORT = 3000;

//reigster view engine
app.set('view engine', 'ejs')
app.set('views', './views')

//BASIC ROUTES
app.get('/', (req, res) => {
 res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/blogs/create', (req, res) => {
  res.render('blogs-create')
})

app.listen(PORT, () =>
  console.log(`SERVER listening on port ${PORT}!`),
);

module.exports = app;