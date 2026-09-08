import{Locator, test,Page} from '@playwright/test'

export class Cart{
    readonly page:Page;
    readonly Add:Locator;
    readonly Cartitem:Locator;
    readonly Checkcartitem:Locator;

    constructor(page:Page){
        this.page=page;
        this.Add=page.getByRole('button',{name:'Add to cart'}).first();
        this.Cartitem=page.locator('//*[@id="shopping_cart_container"]/a');
        this.Checkcartitem=page.getByTestId('shopping-cart-badge')
    }
    async additem(){
        await this.Add.click();
        await this.Cartitem.click();
    }

    async checkcartitem(){
        await this.Checkcartitem.isVisible();

    }
}