module.exports = class ShoppingCardController {
    constructor() {
        console.log("ShoppingCard enabled");
        this.items=["Domates","Biber","Salatalık","Yumurta"];
    }
    addItem(item) {
        console.log("ekleme denenmiştir.");
        this.items.push(item);
        console.log(items[4]);
    }

}
