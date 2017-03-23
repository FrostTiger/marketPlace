module.exports = class LeftMenuController {
    constructor(CardService) {
        this.cardService = CardService;
        this.isArchived = this.cardService.archiveScreen;
        CardService.bind('UpToDateScreen', () => {
            this.isArchived = CardService.archiveScreen;
        })

    }
    setItem(item) {
        if (item == "UpToDate")
            this.cardService.setArchiveScreen(false);
        if (item == "Archive")
            this.cardService.setArchiveScreen(true);
        if (item == 'newShoppingCard')
            this.cardService.createNewShoppingCard();
    }
}
