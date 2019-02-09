const express = require('express');
const app = express();
const port = 3000;

// ROUTES
// '/' => welcome to routes
app.get('/', (req, res) => {
  res.send('<h3>live responded</h3>');
});
// '/bye' => see you next time
app.get('/bye', (req, res) => res.send(`<h3>see you next time</h3>`));
// '/dog' => good boy godge
app.get('/dog', (req, res) => res.send(`<h2>good boy doge</h2>`));

// (START SERVER) tell express to listen for a request
app.listen(port, () => {
  console.log(`listening from ${port}`);
});
