module.exports = class ChatPaneController {
    constructor(ChatService,CardService) {
    this.setArchiveScreen=CardService.archiveScreen;
    ChatService.owner.then(owner => { this.owner = owner    
    });
       CardService.bind('UptodateScreen',() => {
        this.setArchiveScreen=CardService.archiveScreen;
    }) 
     CardService.bind('ArchiveScreen',() => {
        this.setArchiveScreen=CardService.archiveScreen;
        }) 
    }

}