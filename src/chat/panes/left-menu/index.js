var controller = require('./controller');

angular
    .module('chat-app')
    .component('leftMenu', {
        templateUrl: 'chat/panes/left-menu/template.html',
        controller: controller,
        bindings: {
            thread: '=',
            user: '=',
            card: '='
        }
    });
