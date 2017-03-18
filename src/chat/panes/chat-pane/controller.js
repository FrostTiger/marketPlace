module.exports = class ChatPaneController {
    constructor(ChatService) {
    ChatService.owner.then(owner =>{ this.owner = owner
        console.log('owner değeri',this.owner.cards);    
    });
        
    }

}