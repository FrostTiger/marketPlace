module.exports = class MenuController {
    constructor(ChatService, CardService) {
        this.cardService = CardService;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        ChatService.screenTypes.then(screenTypes => {
            this.screenTypes = screenTypes

            CardService.bind(this.screenTypes.UPTODATE, () => {
                this.screenType = this.screenTypes.UPTODATE;
            })
            CardService.bind(this.screenTypes.ARCHIVE, () => {
                this.screenType = this.screenTypes.ARCHIVE;
            })
            CardService.bind(this.screenTypes.SEARCH, () => {
                this.setSearchItem = CardService.searchItem;
                this.screenType = this.screenTypes.SEARCH;
            })
            CardService.bind(this.screenTypes.RECYCLEBIN, () => {
                this.screenType = this.screenTypes.RECYCLEBIN;
            })
            CardService.bind(this.screenTypes.USER, () => {
                this.screenType = this.screenTypes.USER;
            })
            CardService.bind(this.screenTypes.PROFILE, () => {
                this.screenType = this.screenTypes.PROFILE;
            })
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

    myProfile() {
        this.cardService.ScreenType = this.screenTypes.PROFILE;
        this.cardService.trigger(this.screenTypes.PROFILE);
    }

    shoppingList() {
        this.cardService.ScreenType = this.screenTypes.UPTODATE;
        this.cardService.trigger(this.screenTypes.UPTODATE);
    }
}
