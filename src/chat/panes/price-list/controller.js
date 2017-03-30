module.exports = class PriceListController {
    constructor(CardService, ChatService) {
        ChatService.owner.then(owner => {
            this.owner = owner;
        });
    }
}
