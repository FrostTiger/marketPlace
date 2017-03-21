module.exports = class LeftMenuController {
    constructor(CardService) {
        this.cardService = CardService;
        this.isArchived = this.cardService.archiveScreen;
        console.log("leftmenu message");
        CardService.bind('UptodateScreen', () => {
            this.isArchived = CardService.archiveScreen;
        })

    }
    setItem(item) {
        if (item == "Uptodate")
            this.cardService.setArchiveScreen(false);
        if (item == "Arsiv")
            this.cardService.setArchiveScreen(true);
        if (item == 'Yeni_Alışveriş_Listesi')
            this.cardService.createNewShoppingCard();
    }
}
