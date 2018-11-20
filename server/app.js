const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) =>
  res.json(require('./responses/shift-size-default.json'))
);

app.listen(3000, () => console.log(`Dave's sick API server is running now!`));
