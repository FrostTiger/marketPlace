module.exports = class LeftMenuController {
    constructor(ChatService, CardService) {
        this.cardService = CardService;
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

    setItem(item) {
        this.cardService.setScreenType(item);
    }

    newShoppingCard() {
        this.cardService.createNewShoppingCard();
    }
}
