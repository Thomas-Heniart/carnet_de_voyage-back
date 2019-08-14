import express = require("express");

const app: express.Application = express();

const routes = require('./routes');

app.use(routes);

app.listen(3000, () => console.log('App running on port 3000'));
