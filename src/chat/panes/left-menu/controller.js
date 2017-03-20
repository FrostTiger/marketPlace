module.exports = class LeftMenuController {
    constructor(CardService) {
        this.cardService=CardService;
        console.log("leftmenu message");
        
    }
    setItem(item) {
        if(item=="Uptodate")
            this.cardService.setArchiveScreen(false);

        
    }
}
