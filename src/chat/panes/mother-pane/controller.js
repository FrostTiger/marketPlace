module.exports = class MotherPaneController {
    constructor(CardService, ChatService) {
        this.cardService = CardService;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        ChatService.screenTypes.then(screenTypes => {
            this.screenTypes = screenTypes

            CardService.bind(this.screenTypes.UPTODATE, () => {
                this.screenType = this.screenTypes.UPTODATE;
            })
            CardService.bind(this.screenTypes.ARCHIVE, () => {
                this.screenType = this.screenTypes.ARCHIVE;
            })
            CardService.bind(this.screenTypes.SEARCH, () => {
                this.setSearchItem = CardService.searchItem;
                this.screenType = this.screenTypes.SEARCH;
            })
            CardService.bind(this.screenTypes.RECYCLEBIN, () => {
                this.screenType = this.screenTypes.RECYCLEBIN;
            })
            CardService.bind(this.screenTypes.USER, () => {
                this.screenType = this.screenTypes.USER;
            })
            CardService.bind(this.screenTypes.PROFILE, () => {
                this.screenType = this.screenTypes.PROFILE;
            })
        });

    }
}
