var controller = require('./controller');

angular
    .module('chat-app')
    .component('shoppingCard', {
        templateUrl: 'chat/chat-boxes/shopping-card/template.html',
        controller: controller,
        bindings: {
            thread: '=',
            user: '='
        }
    });
