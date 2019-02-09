const express = require('express'),
  port = 3000,
  app = express();

app.get('/', (req, res) => res.send(`<h2>live nodemon</h2>`));

app.get('*', (req, res) => res.send(`<h1>area 404</h1>`));

app.listen(port, () => console.log(`<h2>listening from port:${port}</h2>`));
