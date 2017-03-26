module.exports = class ShoppingCardController {
    constructor(CardService, ChatService, $scope) {
        this.cardService = CardService;
        this.archiveScreen = CardService.archivedCard;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        CardService.bind('ArchiveScreen', () => {
            this.archiveScreen = CardService.archiveScreen;
        })
    }
    addItem(item) {
        if (typeof (item) != "undefined") {
            var flag = true;
            for (var i = 0; i < this.card.items.length; ++i) {
                if (this.card.items[i][0] == item) {
                    flag = false;
                }
            }
            if (flag) {
                this.card.items.push([item, false]);
                this.item1 = '';
            }
        }
    }
    deleteCard(cardName) {
        this.cardService.setDeleteCard(cardName);
    }
    archivedCard(cardName) {
        this.cardService.setarchivedCard(cardName);
    }
    removeItem(index) {
        this.card.items.splice(index, 1);
    }
    sentBackCard(cardName) {
        this.cardService.setSentBackCard(cardName);
    }

    addUser(user) {
        if (typeof (user) != "undefined") {
            if (typeof (this.card.users) == "undefined") {
                this.card.users = [];
            }
            this.card.users.push(user);
        }
    }

    searchResult(content) {
        var te = this.owner.cards;
    }
}
