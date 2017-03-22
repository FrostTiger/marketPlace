module.exports = class ShoppingCardController {
    constructor(CardService, ChatService, $scope) {
        this.cardService = CardService;
        this.setArchiveScreen = CardService.archivedCard;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        CardService.bind('ArchiveScreen', () => {
            this.setArchiveScreen = CardService.archiveScreen;
        })
    }
    addItem(item) {

        this.card.items.push([item, false]);
        this.item1='';
    }
    deleteCard(cardName) {
        this.cardService.setDeleteCard(cardName);
    }
    archivedCard(cardName) {
        this.cardService.setarchivedCard(cardName);
    }
    removeItem(index) {
        this.card.items.splice(index, 1);
    }
    sentBackCard(cardName){
        this.cardService.setSentBackCard(cardName);
    }
}
