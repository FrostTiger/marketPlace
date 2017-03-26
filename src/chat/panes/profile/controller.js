module.exports = class ProfileController {
    constructor(CardService, ChatService) {
        ChatService.owner.then(owner => {
            this.owner = owner
        });
    }
}
