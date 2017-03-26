module.exports = class MenuController {
    constructor(ChatService, CardService) {
        this.cardService = CardService;
        this.archiveScreen = CardService.archiveScreen;
        this.uptodateScreen = CardService.uptodateScreen;
        this.setSearchItem = CardService.searchItem;
        this.setSearchScreen = CardService.searchScreen;
        this.recycleBinScreen = CardService.recycleBinScreen;
        this.profileScreen = CardService.profileScreen;
        this.userScreen = CardService.userScreen;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        CardService.bind('UptodateScreen', () => {
            this.uptodateScreen = CardService.uptodateScreen;
        })
        CardService.bind('ArchiveScreen', () => {
            this.archiveScreen = CardService.archiveScreen;
        })
        CardService.bind('SearchScreen', () => {
            this.setSearchItem = CardService.searchItem;
            this.setSearchScreen = CardService.searchScreen;
        })
        CardService.bind('RecycleBin', () => {
            this.recycleBinScreen = CardService.recycleBinScreen;
        })
        CardService.bind('User', () => {
            this.userScreen = CardService.userScreen;
        })
        CardService.bind('Profile', () => {
            this.profileScreen = CardService.profileScreen;
        })
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

    myProfile() {
        this.cardService.profileScreen = true;
        this.cardService.archiveScreen = false;
        this.cardService.uptodateScreen = false;
        this.cardService.searchScreen = false;
        this.cardService.recycleBinScreen = false;
        this.cardService.userScreen = false;
        this.uptodateScreen = false;
        this.cardService.trigger('UptodateScreen');
        this.cardService.trigger('Profile');
    }

    shoppingList() {
        this.uptodateScreen = true;
        this.profileScreen = false;
        this.cardService.profileScreen = false;
        this.cardService.archiveScreen = false;
        this.cardService.uptodateScreen = true;
        this.cardService.searchScreen = false;
        this.cardService.recycleBinScreen = false;
        this.cardService.userScreen = false;
        this.cardService.trigger('UptodateScreen');
        this.cardService.trigger('Profile');
    }
}
