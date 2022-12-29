

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $("//span[text()='Login']");
    }

    get welcomeMessage(){
        return $("//*[@id='welcomeUserMessage']");
    }

    get requiredUsernameMessage(){
        return $("//*[text()='Username field is required']");
    }

    get requiredPasswordMessage(){
        return $("//*[text()='Password field is required']");
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue("automationtest");
        await this.inputPassword.setValue("123456789");
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
    
}

export default new LoginPage();
