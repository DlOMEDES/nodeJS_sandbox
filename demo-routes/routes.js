const express = require('express');
const app = express();

// HOME
app.get('/', (req, res) => {
  res.send(`<h2>Welcome Routes Homepage</h2>`);
});

app.get('/speak/doge', (req, res) => {
  res.send(`<h1>The doge says 'Woof'</h1>`);
});

app.get('/speak/:animalname', (req, res) => {
  console.log(req.params);
  let animal = req.params.animalname;
  // let noise = '';
  // if (animal === 'pig') {
  //   noise = 'oink';
  // }
  // if (animal === 'cow') {
  //   noise = 'moo';
  // }
  const sounds = {
    pig: 'oink',
    dog: 'woof',
    cat: 'hates all',
    fish: '...',
    cow: 'moo'
  };
  let sound = sounds[animal];
  res.send(`<h3>The ${animal.toUpperCase()} says '${sound}'</h3>`);
});

// APP LISTEN
app.listen(3000, () => {
  console.log(`<h3>running routes at port 3000</h3>`);
});
