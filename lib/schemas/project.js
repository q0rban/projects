var Schema = require('../db').Schema;
var clientSchema = require('./client');

module.exports = new Schema({
    name: { type: String, index: true },
    client: [ clientSchema ]
});
