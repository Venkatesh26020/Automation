import{Locator, test,Page} from '@playwright/test'

export class Checkout{
    readonly page:Page;
    readonly CheckoutButton:Locator;
    readonly FirstName:Locator;
    readonly LastName:Locator;
    readonly PostalCode:Locator;

    constructor(page:Page){
        this.page=page;
        this.CheckoutButton=page.locator('#checkout');
        this.FirstName=page.getByPlaceholder('First Name');
        this.LastName=page.getByPlaceholder('lastName');
        this.PostalCode=page.getByPlaceholder('Zip/Postal Code');
    }

    async CheckoutCart(){
        await this.CheckoutButton.click();
    }

    async FillCheckout(){
        await this.FirstName.fill('Venkatesh');
        await this.LastName.fill('S');
        await this.PostalCode.fill('600100');
    }
}