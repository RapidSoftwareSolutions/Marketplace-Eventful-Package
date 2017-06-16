var datetime = require('node-datetime');

var override = function(args) {

    if(args.startTime != undefined){
        var dateTimeObj = datetime.create(args.startTime);
        args.startTime = dateTimeObj.format("Y-m-dTH:M:S");
    }

    if(args.stopTime != undefined){
        var dateTimeObj = datetime.create(args.stopTime);
        args.stopTime = dateTimeObj.format("Y-m-dTH:M:S");
    }

    return args;
};
module.exports.override = override;