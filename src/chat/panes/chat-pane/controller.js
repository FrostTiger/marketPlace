module.exports = class ChatPaneController {
    constructor(ChatService, CardService) {
        if (this.screenType == undefined) {
            this.screenType = 1;
        }
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        ChatService.screenTypes.then(screenTypes => {
            this.screenTypes = screenTypes;

            CardService.bind(this.screenTypes.UPTODATE, () => {
                this.screenType = this.screenTypes.UPTODATE;
            });

            CardService.bind(this.screenTypes.ARCHIVE, () => {
                this.screenType = this.screenTypes.ARCHIVE;
            });

            CardService.bind(this.screenTypes.SEARCH, () => {
                this.setSearchItem = CardService.searchItem;
                this.screenType = this.screenTypes.SEARCH;
            });

            CardService.bind(this.screenTypes.RECYCLEBIN, () => {
                this.screenType = this.screenTypes.RECYCLEBIN;
            });

            CardService.bind(this.screenTypes.USER, () => {
                this.screenType = this.screenTypes.USER;
            });

            CardService.bind(this.screenTypes.PROFILE, () => {
                this.screenType = this.screenTypes.PROFILE;
            });
            
            CardService.bind(this.screenTypes.PRICELIST, () => {
                this.screenType = this.screenTypes.PRICELIST;
            });
        });
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
