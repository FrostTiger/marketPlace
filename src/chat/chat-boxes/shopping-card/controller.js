module.exports = class ShoppingCardController {
    constructor(CardService) {
     this.cardService=CardService;
    }
    addItem(item) {

        this.card.items.push([item,false]);
    }
    deleteCard(cardName){
        this.cardService.setDeleteCard(cardName);
    }
}
