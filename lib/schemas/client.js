var Schema = require('../db').Schema;
var clientSchema = new Schema({
    company: { type: String, index: true },
    contact: {
        first: String,
        last: String,
        email: String
    }
});

clientSchema.virtual('contact.name').get(function () {
    return this.contact.first + ' ' + this.contact.last;
});

clientSchema.virtual('contact.name').set(function (name) {
    var split = name.split(' ');
    this.contact.first = split[0];
    this.contact.last = split[1];
});

module.exports = clientSchema;
