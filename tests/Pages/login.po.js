import {expect} from "@playwright/test";
export class LoginPage{

    constructor(page){
        this.page=page;
        this.usernameInput=page.locator("input[name='username']");
        this.passwordInput=page.locator("input[type='password']");
        this.loginbutton=page.locator("button[type='submit']");
        this.loginErrorMessage=page.getByText('Invalid credentials');
        this.log=page.getByRole('img', { name: 'company-branding' });
    }
    async lanchApp(){
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    }
    async logisDispalyed(){
        await expect(this.log).toBeVisible();
       
    }
    async loginWithCreds(username,password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginbutton.click();
    }
    async verifyLoginSuccess(){
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",{timeout:30000})
    }
    async verifyLoginFailure(){
        await expect(this.loginErrorMessage).toBeVisible();
    }   
   
}
