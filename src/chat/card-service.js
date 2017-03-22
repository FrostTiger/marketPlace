var EventEmitter = require('../lib/event-emitter');
var Card = require('../chat/user/card');

class CardService extends EventEmitter {
    constructor(ChatService) {
        super();
        ChatService.owner.then(owner => {
            this.owner = owner
        });
        //Activate uptodate list or archivelist
        // true - Archive List / false - Uptodate list
        this.archiveScreen = false;
        this.content = 'Delete';
    }
    getOwnerUserName() {
        return this.owner.username;
    }

    setDeleteCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards.splice(i, 1);
            }
        }
    }

    setarchivedCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards[i].isArchived = true;
            }
        }
    }

    setArchiveScreen(content) {
        this.archiveScreen = content;
        this.trigger('UptodateScreen');
    }

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