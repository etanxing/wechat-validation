var MC = require('./messageCenter');
module.exports = function (message, req, res, next) {
    var recognition = message.Recognition;
    MC.get(recognition, res);
}