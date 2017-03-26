module.exports = class MotherPaneController {
    constructor(CardService, ChatService) {
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


}
