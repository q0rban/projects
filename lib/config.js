var nconf = require('nconf');

var Config = function Config() {
    this.file = __dirname + '/../config.json';
};

Config.prototype.get = function get(name) {
    return nconf.get(name);
};

Config.prototype.set = function set(name, value, defer) {
    nconf.set(name, value);
    // If saving is deferred, simply return without saving.
    if (defer) {
        return this;
    }
    nconf.save();
    return this;
};

Config.prototype.load = function load() {
    nconf.file(this.file);
    return this;
};

var config = new Config();
config.load();
module.exports = config;
