module.exports = class Card {
    constructor(_name, _items, _isArchived) {
        this.items = _items;
        this.name = _name;
        this.isArchived = _isArchived;
    }
}