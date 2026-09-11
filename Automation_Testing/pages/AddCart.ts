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
        this.Checkcartitem=page.getByTestId('shopping-cart-badge');
        this.AddNew=page.getByRole('button',{name:'Add to cart'}).nth(1);
        this.continueshoppingbutton=page.getByRole('button',{name:/Continue Shopping/});
    }
    async additem(){
        await this.Add.click();
        await this.Cartitem.click();
    }

    async checkcartitem(){
       await expect(this.Checkcartitem.isVisible());

    }
    async continueshopping(){
        await this.AddNew.click();
        await this.Cartitem.click();
        await this.continueshoppingbutton.click();

    }
}