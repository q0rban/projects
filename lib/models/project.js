var db = require('./../db');

var Project = db.model('Project', require('./../schemas/project'));

module.exports = Project;
