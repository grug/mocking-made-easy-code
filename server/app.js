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

app.get('/next-shift', (req, res) =>
  setTimeout(
    () => res.json(require('./responses/shift-size-default.json')),
    2000
  )
);

app.listen(3000, () => console.log(`Dave's sick API server is running now!`));
