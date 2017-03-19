module.exports = class MenuController {
    constructor(ChatService) {
    ChatService.owner.then(owner =>{ this.owner = owner
        console.log('owner değeri',this.owner.picture.medium);    
    });
    }
    setItem(item){
        console.log(item);
    }
}
