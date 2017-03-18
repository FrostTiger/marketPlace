module.exports = class ShoppingCardController {
    constructor() {
     
    }
    addItem(item) {

        this.card.items.push([item,false]);
    }
}
