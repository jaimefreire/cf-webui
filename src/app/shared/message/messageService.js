angular.module('app.message').factory('messageService', ['$rootScope', function($rootScope) {
  var messageServiceFactory = {};

  var _messages = [];

  var _addMessage = function(type, msg, avoidDelete) {
    if (avoidDelete !== true) _removeAllMessages();
    var message = {
      type: type,
      msg: msg
    };

    _messages.push(message);
  };

  var _removeAllMessages = function(messageObject) {
    if (_messages.length > 0){
      _messages.length = 0;
    }
  };

  var _removeMessage = function(messageObject) {
    var index = _messages.indexOf(messageObject);
    _messages.splice(index, 1);
  };

  messageServiceFactory.messages = _messages;
  messageServiceFactory.addMessage = _addMessage;
  messageServiceFactory.removeMessage = _removeMessage;
  messageServiceFactory.removeAllMessages = _removeAllMessages;

  return messageServiceFactory;
}]);