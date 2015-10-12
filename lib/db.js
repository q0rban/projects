var mongoose = require('mongoose');
var config = require('./config');
var uri = 'mongodb://' + config.get('database:host') + '/' + config.get('database:name');

mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', function () {
    console.error(arguments);
    process.exit(23);
});
db.once('open', function (callback) {
    console.log('Connected to MongoDB at %s.', uri);
});

module.exports = mongoose;
