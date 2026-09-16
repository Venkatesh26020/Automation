import{Locator, test,Page, expect} from '@playwright/test'

export class Checkout{
    readonly page:Page;
    readonly CheckoutButton:Locator;
    readonly FirstName:Locator;
    readonly LastName:Locator;
    readonly PostalCode:Locator;
    readonly Continue:Locator;
    readonly Finish:Locator;

    constructor(page:Page){
        this.page=page;
        this.CheckoutButton=page.locator('#checkout');
        this.FirstName=page.getByPlaceholder('First Name');
        this.LastName=page.getByPlaceholder('Last Name');
        this.PostalCode=page.getByPlaceholder('Zip/Postal Code');
        this.Continue=page.getByRole('button',{name:'continue'});
        this.Finish=page.getByRole('button',{name:'Finish'});
    }

    async CheckoutCart(){
        await this.CheckoutButton.click();
    }

    async FillCheckout(FirstName:string,LastName:string,PostalCode:string){
        await this.FirstName.fill(FirstName);
        await this.LastName.fill(LastName);
        await this.PostalCode.fill(PostalCode);
        await this.Continue.click();
        await this.Finish.click();
        await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
        await this.page.screenshot({fullPage:true,path:'C:\\Users\\venka\\OneDrive\\Pictures\\Screenshots\\screnshot.png'});

    }
}