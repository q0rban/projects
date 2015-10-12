var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var restify = require('express-restify-mongoose');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

var router = express.Router();

var contractModel = require('./lib/models/contract');
restify.serve(router, contractModel);

var projectModel = require('./lib/models/project');
restify.serve(router, projectModel);

app.use(router);

app.listen(3000, function() {
    console.log("Lullabot Projects API server listening on port 3000.");
    try {
        var open = require('open');
        open('http://localhost:3000/api/v1/contracts');
    } catch (e) {}
});
