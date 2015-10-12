var db = require('./../db');

var Contract = db.model('Contract', require('./../schemas/contract'));

module.exports = Contract;
