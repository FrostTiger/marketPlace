var controller = require('./controller');

angular
    .module('chat-app')
    .component('profile', {
        templateUrl: 'chat/panes/profile/template.html',
        controller
    });
