module.exports = class ShoppingCardController {
    constructor(CardService,ChatService) {
     this.cardService=CardService;
     this.setArchiveScreen=CardService.archivedCard;
     ChatService.owner.then(owner => {
        this.owner = owner
            console.log('owner değeri', this.owner.cards);
        });
    }
    addItem(item) {

        this.card.items.push([item,false]);
    }
    deleteCard(cardName){
        this.cardService.setDeleteCard(cardName);
    }
    archivedCard(cardName){
        this.cardService.setarchivedCard(cardName);
    }
}
