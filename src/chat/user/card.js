module.exports = class Card {
    constructor(_name, _items, _isArchived, _is, _users) {
        this.items = _items;
        this.name = _name;
        this.isArchived = _isArchived;
        this.users = _users
    }
}
