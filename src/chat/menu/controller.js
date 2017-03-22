module.exports = class MenuController {
    constructor(ChatService) {
        ChatService.owner.then(owner => {
        this.owner = owner
        });
    }
    setItem(item) {
    }
}
