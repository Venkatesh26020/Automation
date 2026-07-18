import{Page,Locator,test, expect} from'@playwright/test';

export class Loginpage{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly Loginbutton:Locator;
    
    constructor(page:Page){
        this.page=page;
        this.username=page.getByLabel('UserName');
        this.password=page.getByLabel('Password');
        this.Loginbutton=page.getByRole('button',{name:'Submit'});
    }
    async goto(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }
    async login(username: string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.Loginbutton.click();
    }
    
}

export class InvalidLogin{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly ErrorMessage:Locator;

    constructor(page:Page){
        this.page=page;
        this.username=page.getByLabel('Username');
        this.password=page.getByLabel('Password');
        this.ErrorMessage=page.locator('#error')
    }
    async goto(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }
    async invalidlogin(username:string,password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await expect(this.page.locator('#error')).toHaveText('Your username is invalid!');
    }
}
