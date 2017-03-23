var EventEmitter = require('../lib/event-emitter');
var Card = require('../chat/user/card');

class CardService extends EventEmitter {
    constructor(ChatService) {
        super();
        ChatService.owner.then(owner => {
            this.owner = owner
        });

        /**
         * @description
         * Activate UpToDate list or archivelist
         * true - Archive List / false - UpToDate list
         * 
         * @author G. ŞAMAN
         */
        this.archiveScreen = false;
        /**
         * @description
         * Search screen is activated with set this.searchScreen variable to true
         * default value is false
         * 
         * @author G.ŞAMAN
         */
        this.searchScreen = false;
        this.searchItem = '';
        this.content = 'Delete';
    }
    
    getOwnerUserName() {
        return this.owner.username;
    }

    /**
     * @description
     * This function is used in controller of shopping-card and delete shopping card from card box of user.
     * 
     * @param {String} newContent 
     */
    setDeleteCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards.splice(i, 1);
            }
        }
    }

    /**
     * @description
     * Set status card Up to date card to archive.
     * 
     * @param {String} newContent 
     */
    setarchivedCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards[i].isArchived = true;
            }
        }
    }

    /**
     * @description
     * Set screen Up to date card to archive.
     * @param {String} content 
     */
    setArchiveScreen(content) {
        this.archiveScreen = content;
        this.searchScreen = false;
        this.trigger('UpToDateScreen');
        this.trigger('SearchScreen');
    }

    /**
     * @description
     * Set search screen is activated.
     * 
     * @param {String} content 
     */
    setSearchScreen(content) {
        this.searchItem=content;
        this.searchScreen = true;
        this.archiveScreen =false;
        this.trigger('SearchScreen');
        this.trigger('UpToDateScreen');
    }

    /**
     * @description
     * Create new shopping card with using date function.
     */
    createNewShoppingCard() {
        var today = new Date();
        var day = today.getDate();
        if (day < 10)
            day = "0" + day;
        var month = today.getMonth() + 1;
        if (month < 10)
            month = "0" + month;
        var year = today.getFullYear();
        var strDate = day + "." + month + "." + year + "-" + (this.owner.cards.length + 1);
        this.owner.cards.push(new Card(strDate, [], false));
    }

    /**
     * @description
     * Restore shopping card from archive.
     * 
     * @param {String} newContent 
     */
    setSentBackCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards[i].isArchived = false;
            }
        }

    }
}

angular.module('chat-app').service('CardService', CardService);