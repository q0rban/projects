var program = require('commander');

program.command('contract')
    .action(function() {
        var contract = require('./lib/models/contract.js');

    });

program.parse(process.argv);
