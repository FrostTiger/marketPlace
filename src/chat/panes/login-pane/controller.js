module.exports = class LoginPaneController {
    constructor(ChatService, LoginService) {
        this.loginService = LoginService;
        this.errMessage = false;
        ChatService.owner.then(owner => {
            this.owner = owner
        });
    }
    checkLoginAttempt(username, password) {
        if (username == this.owner.username && password == this.owner.password)
            this.loginService.setloginScreen(false);
        else
            this.errMessage = true;
    }
}
