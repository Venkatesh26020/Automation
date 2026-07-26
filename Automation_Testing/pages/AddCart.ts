import{Locator, test,Page} from '@playwright/test'

export class Cart{
    readonly page:Page;
    readonly Add:Locator;
    readonly Cartitem:Locator;

    constructor(page:Page){
        this.page=page;
        this.Add=page.getByRole('button',{name:'Add to cart'}).first();
        this.Cartitem=page.locator('//*[@id="shopping_cart_container"]/a');
    }
    async additem(){
        await this.Add.click();
        await this.Cartitem.click();
    }
}