module.exports = class ChatPaneController {
    constructor(ChatService, CardService) {
        this.archiveScreen = CardService.archiveScreen;
        this.uptodateScreen = CardService.uptodateScreen;
        this.setSearchItem = CardService.searchItem;
        this.setSearchScreen = CardService.searchScreen;
        this.recycleBinScreen = CardService.recycleBinScreen;
        this.profileScreen = CardService.profileScreen;
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

    deleteAllCards() {
        this.owner.deletedcards = [];
    }

    Search(item) {
        this.owner.searchResult = [];
        for (var i = 0; i < this.owner.cards.length; ++i) {
            for (var j = 0; j < this.owner.cards[i].items.length; ++j) {
                if (this.owner.cards[i].items[j][0] == item) {
                    this.owner.searchResult.push(this.owner.cards[i]);
                    break;
                }
            }
        }
    }
}