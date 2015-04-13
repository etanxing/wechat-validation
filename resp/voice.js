var MC = require('./messageCenter');
module.exports = function (message, req, res, next) {
    var recognition = message.Recognition;
    res.reply('收到了您的语音指令:' + recognition);
    MC.get(recognition, res);
}