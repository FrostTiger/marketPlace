module.exports = class LeftMenuController {
    constructor(ChatService, CardService) {
        this.cardService = CardService;
        if (this.screenType == undefined) {
            this.screenType = 1;
        }
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

    setItem(item) {
        if (item == "Uptodate")
            this.cardService.setScreenType(this.owner.ScreenType.UPTODATE);
        else if (item == "Archive")
            this.cardService.setScreenType(this.owner.ScreenType.ARCHIEVE);
        else if (item == 'newShoppingCard')
            this.cardService.createNewShoppingCard();
        else if (item == 'Delete')
            this.cardService.setScreenType(this.owner.ScreenType.RECYCLEBIN);
        else if (item == 'User')
            this.cardService.setScreenType(this.owner.ScreenType.USER);
    }
}
