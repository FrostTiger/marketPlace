var controller = require('./controller');

angular
    .module('chat-app')
    .component('userBox', {
        templateUrl: 'chat/chat-boxes/user-box/template.html',
        controller: controller,
        bindings: {
            user:'='
            
        }
    });
