import express = require("express");

const dotenvResult = require("dotenv").config();

if (dotenvResult.error) {
    throw dotenvResult.error;
}

const app: express.Application = express();

const routes = require('./routes');

app.use(routes);

app.listen(3000, () => console.log('App running on port 3000'));
