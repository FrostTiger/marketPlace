module.exports = class UserBoxController {
    constructor(CardService, ChatService, $scope) {
        this.cardService = CardService;
        this.archiveScreen = CardService.archivedCard;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        ChatService.threads.then(threads => {
            this.threads = threads;
        });

    }

}
