module.exports = class ChatPaneController {
    constructor(ChatService,CardService) {
    this.setArchiveScreen=CardService.archiveScreen;
    ChatService.owner.then(owner =>{ this.owner = owner
        console.log('owner değeri',this.owner.cards);    
    });
       CardService.bind('UptodateScreen',() =>{
        this.setArchiveScreen=CardService.archiveScreen;
    }) 
     CardService.bind('ArchiveScreen',() =>{
        this.setArchiveScreen=CardService.archiveScreen;
        }) 
    }

}