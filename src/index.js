var mockBackend = require('./lib/mock-backend');
require('./lib/ui');

angular
    .module('chat-app', ['ngMockE2E', 'ui'])
    .run($httpBackend => {
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET('/api/threads').respond(mockBackend.getThreads);
        $httpBackend.whenGET('/api/updates').respond(mockBackend.getUpdates);
        $httpBackend.whenGET('/api/owner').respond(mockBackend.getOwner);
        $httpBackend.whenGET('/api/screenTypes').respond(mockBackend.getScreenTypes);
    });

require('./chat/services');
require('./chat/components');

