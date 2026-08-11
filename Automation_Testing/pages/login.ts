import {Locator, test,Page, expect} from '@playwright/test'

export class Login{
    readonly page:Page;
    readonly username:Locator;
    readonly Password:Locator;
    readonly LoginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.username=page.getByPlaceholder('Username');
        this.Password=page.getByPlaceholder('Password')
        this.LoginButton=page.locator('#login-button');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username:string,password:string){
        await this.username.fill(username);
        await this.Password.fill(password);
        await this.LoginButton.click();
    }

    async Invalidlogin(username:string,password:string){
        await this.username.fill(username);
        await this.Password.fill(password);
        await this.LoginButton.click();
        await expect(this.page.locator('error-button')).toBeVisible();
    }

}