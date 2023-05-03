const express = require("express");
const app = express();
PORT = 3000;

//BASIC ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () =>
  console.log(`SERVER listening on port ${PORT}!`),
);

module.exports = app;