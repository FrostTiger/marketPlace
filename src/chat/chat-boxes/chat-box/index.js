var controller = require('./controller');

angular
    .module('chat-app')
    .component('chatBox', {
        templateUrl: 'chat/chat-boxes/chat-box/template.html',
        controller: controller,
        bindings: {
            thread: '=',
            user: '='
        }
    });
