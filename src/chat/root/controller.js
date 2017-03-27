module.exports = class RootController {
    constructor(ChatService,LoginService) {
        this.setLoginScreen = LoginService.loginScreen;
        LoginService.bind('LoginStatusChange', () => {
            this.setLoginScreen = LoginService.loginScreen;
        })
    }
}