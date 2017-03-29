var controller = require('./controller');

angular
    .module('chat-app')
    .component('priceList', {
        templateUrl: 'chat/panes/price-list/template.html',
        controller: controller
    });
