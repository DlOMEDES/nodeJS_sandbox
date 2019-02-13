// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('method', req.method);
//   console.log('url', req.url);
//   // console.log('headers', req.headers);

//   const user = {
//     name: 'john',
//     hobby: 'fishing'
//   };
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify(user));
// });

// server.listen(3000);
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   console.log('<h1>h1 running</h1>');
//   next();
// });
app.get('/profile', (req, res) => {
  res.send('<h1>Getting Profiles</h1>');
});

app.post('/profile', (req, res, body) => {
  console.log(req.body);
  const user = {
    name: 'jane doe',
    hobby: 'dancing'
  };
  res.send(user);
});

app.get('/', (req, res) => {
  res.send('<h1>Root</h1>');
});

app.listen(3000, () => console.log('running port 3000'));
