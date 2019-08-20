const configs = require("../knexfile");

const env: string = process.env.NODE_ENV ? process.env.NODE_ENV : '';

const config = configs[env];

const knex = require('knex')(config);

console.log('I am called');

module.exports = {
    knex
};


