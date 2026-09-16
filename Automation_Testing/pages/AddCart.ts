import{Locator, test,Page,expect} from '@playwright/test'

export class Cart{
    readonly page:Page;
    readonly Add:Locator;
    readonly Cartitem:Locator;
    readonly Checkcartitem:Locator;
    readonly continueshoppingbutton:Locator;
    readonly AddNew:Locator;


    constructor(page:Page){
        this.page=page;
        this.Add=page.getByRole('button',{name:'Add to cart'}).first();
        this.Cartitem=page.locator('//*[@id="shopping_cart_container"]/a');
        this.AddNew=page.getByRole('button',{name:'Add to cart'}).nth(1);
        this.Checkcartitem=page.locator('#shopping_cart_container > a > span');
        this.continueshoppingbutton=page.getByRole('button',{name:/Continue Shopping/});
    }
    async additem(){
        await this.Add.click();
        await this.Cartitem.click();
        await expect(this.Checkcartitem).toBeVisible();

    }

    // async checkcartitem(){
    //    await this.Cartitem.click();
    //    await expect(this.Checkcartitem).toBeVisible();

    // }
    async continueshopping(){
        await this.AddNew.click();
        await this.Cartitem.click();
        await this.continueshoppingbutton.click();

    }
}