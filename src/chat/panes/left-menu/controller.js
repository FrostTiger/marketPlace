module.exports = class LeftMenuController {
    constructor(CardService) {
        this.cardService = CardService;
        this.isArchived = this.cardService.archiveScreen;
        CardService.bind('UptodateScreen', () => {
            this.isArchived = CardService.archiveScreen;
        })

    }
    setItem(item) {
        if (item == "Uptodate")
            this.cardService.setArchiveScreen(false);
        if (item == "Archive")
            this.cardService.setArchiveScreen(true);
        if (item == 'newShoppingCard')
            this.cardService.createNewShoppingCard();
    }
}
