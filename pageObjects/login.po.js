const {expect} = require("@playwright/test");

exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page;
        this.usernameInput = '#email';
        this.passwordInput = '//input[@placeholder = "Password"]';
        this.loginButton = "//button[@id = 'submit']";
        this.logOut = '//button[@id = "logout"]';
        this.LoginValidation = '//p[contains(text),"Click on any contact to view the Contact Details"]';
        this.alertMessage = "//span[@id = 'error']";
    }

    async login(username, password){
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
    
    async VerifyValidLogin(username, password){
        const LoginValidation = await this.page.locator(this.LoginValidation).fill(username);
        await this.page.waitForTimeout(2000);
        expect(this.logOut).toBeVisible;
        await expect(LoginValidation).toHaveText("Click on any contact to view the Contact Details");
    }

     async VerifyValidLogin(){
        const Invalidlogin = await this.page.locator(this.page.locator).fill(this.alertMessage);
       
        await expect(Invalidlogin).toHaveText("Icorrect username or password");
    }

}
