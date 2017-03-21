var EventEmitter = require('../lib/event-emitter');
var Card = require('../chat/user/card');

class CardService extends EventEmitter {
    constructor(ChatService) {
        super();
        ChatService.owner.then(owner => {
        this.owner = owner
            console.log('owner değeri', this.owner.cards);
        });
        window.cs = this;
        //Activate uptodate list or archivelist
        // true - Archive List false - Uptodate list
        this.archiveScreen=false;
        this.content = 'Delete';
    }
    getOwnerUserName(){
        return this.owner.username;
    }

    setDeleteCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards.splice(i, 1);
            }
        }
        console.log('new delete', this.owner.cards);
    }
    setarchivedCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards[i].isArchived=true;
            }
        }
        console.log('new archived card', this.owner.cards);
    }
    setArchiveScreen(content){
        this.archiveScreen=content;
        
            this.trigger('UptodateScreen');
        
            this.trigger('ArchiveScreen');
        
    }
    createNewShoppingCard(){
        var today = new Date();
        var day=today.getDate();
        if(day<10)
            day="0"+day;        
        var month=today.getMonth()+1;
        if(month<10)
            month="0"+month;
        var year=today.getFullYear();
        var strDate=day+"."+month+"."+year;
        this.owner.cards.push(new Card(strDate,[],false));
    }
}

angular.module('chat-app').service('CardService', CardService);