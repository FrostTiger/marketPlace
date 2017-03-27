module.exports = class MenuController {
    constructor(ChatService, CardService) {
        this.cardService = CardService;
        ChatService.owner.then(owner => {
            this.owner = owner
        });

        CardService.bind('UptodateScreen', () => {
            this.screenType = this.owner.ScreenType.UPTODATE;
        })
        CardService.bind('ArchiveScreen', () => {
            this.screenType = this.owner.ScreenType.ARCHIEVE;
        })
        CardService.bind('SearchScreen', () => {
            this.setSearchItem = CardService.searchItem;
            this.screenType = this.owner.ScreenType.SEARCH;
        })
        CardService.bind('RecycleBin', () => {
            this.screenType = this.owner.ScreenType.RECYCLEBIN;
        })
        CardService.bind('User', () => {
            this.screenType = this.owner.ScreenType.USER;
        })
        CardService.bind('Profile', () => {
            this.screenType = this.owner.ScreenType.PROFILE;
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
        this.cardService.ScreenType = this.owner.ScreenType.PROFILE;
        this.cardService.trigger('Profile');
    }

    shoppingList() {
        this.cardService.ScreenType = this.owner.ScreenType.UPTODATE;
        this.cardService.trigger('UptodateScreen');
    }
}
