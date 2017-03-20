module.exports = class LeftMenuController {
    constructor(CardService) {
        this.cardService=CardService;
        console.log("leftmenu message");
        
    }
    setItem(item) {
        if(item=="Uptodate")
            this.cardService.setArchiveScreen(false);
        if(item=="Arsiv")
            this.cardService.setArchiveScreen(true);
        
    }
}
