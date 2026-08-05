import { test } from '../Automation_Testing/pages/fixtures';
import { Cart } from '../Automation_Testing/pages/AddCart';
import { Checkout } from '../Automation_Testing/pages/Checkout';



test('Checkout Item',async ({authenticatedPage}) => {
    const cart=new Cart(authenticatedPage);
    await cart.additem();
    const checkout= new Checkout(authenticatedPage)
    await checkout.CheckoutCart();
    await authenticatedPage.waitForTimeout(2000);
    await checkout.FillCheckout();
    await authenticatedPage.waitForTimeout(2000);
})