var controller = require('./controller');

angular
    .module('chat-app')
    .component('loginPane', {
        templateUrl: 'chat/panes/login-pane/template.html',
        controller: controller,
        bindings: {
            thread: '=',
            user: '=',
            card: '='
        }
    });
