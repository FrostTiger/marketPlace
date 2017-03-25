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
        this.uptodateScreen = true;
        this.searchScreen = false;
        this.recycleBinScreen = false;
        this.userScreen = false;
        this.profileScreen = false;
        this.searchItem = '';
        this.content = 'Delete';
    }
    getOwnerUserName() {
        return this.owner.username;
    }

    setDeleteCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                //moving current card to deletedcards
                this.owner.deletedcards.push(this.owner.cards[i]);
                this.owner.cards[i].isDeleted = true;
                this.owner.cards.splice(i, 1);
            }
        }
    }

    setarchivedCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards[i].isArchived = true;
                this.owner.cards[i].isDeleted = false;
            }
        }
    }

    setUptodateScreen() {
        this.archiveScreen = false;
        this.uptodateScreen = true;
        this.searchScreen = false;
        this.recycleBinScreen = false;
        this.userScreen = false;
        this.profileScreen = false;
        this.trigger('UptodateScreen');
        this.trigger('SearchScreen');
        this.trigger('RecycleBin');
        this.trigger('ArchiveScreen');
        this.trigger('User');
    }

    setArchiveScreen() {
        this.archiveScreen = true;
        this.uptodateScreen = false;
        this.searchScreen = false;
        this.recycleBinScreen = false;
        this.userScreen = false;
        this.profileScreen = false;
        this.trigger('UptodateScreen');
        this.trigger('SearchScreen');
        this.trigger('RecycleBin');
        this.trigger('ArchiveScreen');
        this.trigger('User');
    }

    setSearchScreen(content) {
        this.searchItem = content;
        this.searchScreen = true;
        this.archiveScreen = false;
        this.recycleBinScreen = false;
        this.trigger('SearchScreen');
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

    setRecycleBinScreen() {
        this.archiveScreen = false;
        this.searchScreen = false;
        this.recycleBinScreen = true;
        this.userScreen = false;
        this.profileScreen = false;
        this.uptodateScreen = false;
        this.trigger('UptodateScreen');
        this.trigger('SearchScreen');
        this.trigger('RecycleBin');
        this.trigger('ArchiveScreen');
        this.trigger('User');
    }

    setUserScreen() {
        this.archiveScreen = false;
        this.searchScreen = false;
        this.recycleBinScreen = false;
        this.userScreen = true;
        this.profileScreen = false;
        this.uptodateScreen = false;
        this.trigger('UptodateScreen');
        this.trigger('SearchScreen');
        this.trigger('RecycleBin');
        this.trigger('ArchiveScreen');
        this.trigger('User');
    }

    searchResult(content) {
        var te = this.owner.cards;
    }
}

angular.module('chat-app').service('CardService', CardService);