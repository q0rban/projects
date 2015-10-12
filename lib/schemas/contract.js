var Schema = require('../db').Schema;
var personSchema = require('./person');
var projectSchema = require('./project');
var attachmentSchema = require('./attachment');

module.exports = new Schema({
    oppId: { type: Number, index: true },
    projectName: { type: String, index: true },
    totalHours: { type: Number, default: 0 },
    startDate: Date,
    endDate: Date,
    project: [ projectSchema ],
    team: [ personSchema ],
    travel: Array,
    ooo: Array,
    notes: String,
    attachments: [ attachmentSchema ]
});
