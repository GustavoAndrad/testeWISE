const knexfile = require("../../knex-file")
const knex = require('knex')(knexfile['development'])

module.exports = knex