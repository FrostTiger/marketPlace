module.exports = class MotherPaneController {
    constructor(CardService, ChatService) {
        this.cardService = CardService;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        ChatService.screenTypes.then(screenTypes => {
            this.screenTypes = screenTypes
        });
        if (this.screenType == undefined) {
            this.screenType = 1;
        }
        CardService.bind('UptodateScreen', () => {
            this.screenType = this.screenTypes.UPTODATE;
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
            this.screenType = this.screenTypes.PROFILE;
        })
    }
}
