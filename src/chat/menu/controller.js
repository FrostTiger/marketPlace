module.exports = class MenuController {
    constructor(ChatService, CardService) {
        this.cardService = CardService;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
    }
    setSearchItemScreen(item) {
        this.cardService.setSearchScreen(item);
        this.search = '';
    }
}
