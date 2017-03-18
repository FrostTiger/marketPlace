module.exports = class ShoppingCardController {
    constructor() {

        
        console.log('shop den',this.items);
     
}
    addItem(item) {
        console.log("ekleme denenmiştir.");
        this.items.push(item);
        console.log(items[4]);
    }
      setCard(Card){
        this.name=Card.name;
        this.items=Card.items;
    } 

}
