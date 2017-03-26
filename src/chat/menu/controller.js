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
        this.owner.searchResult = [];
        for (var i = 0; i < this.owner.cards.length; ++i) {
            for (var j = 0; j < this.owner.cards[i].items.length; ++j) {
                if (this.owner.cards[i].items[j][0] == item) {
                    this.owner.searchResult.push(this.owner.cards[i]);
                    break;
                }
            }
        }
        for (var i = 0; i < this.owner.cards.length; ++i) {
            if (this.owner.cards[i].name == item) {
                this.owner.searchResult.push(this.owner.cards[i]);
            }
        }
    }
}
