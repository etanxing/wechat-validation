var MC = require('./messageCenter');

module.exports = function(message, req, res, next) {
  MC.get(message.Content, res);
};