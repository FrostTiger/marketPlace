module.exports = class LeftMenuController {
    constructor(CardService) {
        this.cardService = CardService;
        this.archiveScreen = CardService.archiveScreen;
        this.uptodateScreen = CardService.uptodateScreen;
        this.setSearchItem = CardService.searchItem;
        this.setSearchScreen = CardService.searchScreen;
        this.recycleBinScreen = CardService.recycleBinScreen;
        this.profileScreen = CardService.profileScreen;
        this.userScreen = CardService.userScreen;
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

    setItem(item) {
        if (item == "Uptodate")
            this.cardService.setUptodateScreen();
        else if (item == "Archive")
            this.cardService.setArchiveScreen();
        else if (item == 'newShoppingCard')
            this.cardService.createNewShoppingCard();
        else if (item == 'Delete')
            this.cardService.setRecycleBinScreen();
        else if (item == 'User')
            this.cardService.setUserScreen();
    }
}
