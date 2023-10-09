// app.js
const express = require('express');
const knex = require('knex');
const knexConfig = require('./Knexfile');

const app = express();
const db = knex(knexConfig.development);

app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
