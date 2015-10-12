var Schema = require('../db').Schema;

module.exports = new Schema({
    filename: { type: String, index: true },
    description: String,
    path: String
});
