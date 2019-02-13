const express = require('express');

const app = express();

// app.get('/:id', (req, res) => {
//   console.log(req.query);
//   req.body
//   console.log(req.headers);
//   console.log(req.params);
//   res.send('<h1>Restful API root</h1>');
// });

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => console.log('running port 3000'));
