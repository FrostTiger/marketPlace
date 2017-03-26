module.exports = class RootController {
    constructor(LoginService) {
        this.setLoginScreen = LoginService.loginScreen;
        LoginService.bind('LoginStatusChange', () => {
            this.setLoginScreen = LoginService.loginScreen;
        })
    }

}
