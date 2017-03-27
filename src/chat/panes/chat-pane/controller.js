module.exports = class ChatPaneController {
    constructor(ChatService, CardService) {
        if (this.screenType == undefined) {
            this.screenType = 1;
        }
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        ChatService.screenTypes.then(screenTypes => {
            this.screenTypes = screenTypes
        });
        CardService.bind('UptodateScreen', () => {
            this.screenType = this.screenTypes.UPTODATE;
        })
        CardService.bind('ArchiveScreen', () => {
            this.screenType = this.screenTypes.ARCHIEVE;
        })
        CardService.bind('SearchScreen', () => {
            this.setSearchItem = CardService.searchItem;
            this.screenType = this.screenTypes.SEARCH;
        })
        CardService.bind('RecycleBin', () => {
            this.screenType = this.screenTypes.RECYCLEBIN;
        })
        CardService.bind('User', () => {
            this.screenType = this.screenTypes.USER;
        })
        CardService.bind('Profile', () => {
            this.screenType = this.screenTypes.PROFILE;
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