var EventEmitter = require('../lib/event-emitter');

class LoginService extends EventEmitter {
    constructor(ChatService) {
        super();
        this.loginScreen = true;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
    }
    setloginScreen(item){
        this.loginScreen=item;
        this.trigger('LoginStatusChange');
    }
}

angular.module('chat-app').service('LoginService', LoginService);
