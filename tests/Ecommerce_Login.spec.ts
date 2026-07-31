import { test } from '../Automation_Testing/pages/fixtures';
import { Cart } from '../Automation_Testing/pages/AddCart';
import { Checkout } from '../Automation_Testing/Checkout';


test('login with fixture', async ({ authenticatedPage }) => {
    await authenticatedPage.waitForTimeout(2000);
});

test('Add Item', async ({ authenticatedPage }) => {
    const cart = new Cart(authenticatedPage);
    await cart.additem();
});

test('Checkout Item',async ({authenticatedPage}) => {
    const cart=new Cart(authenticatedPage);
    await cart.additem();
    const checkout= new Checkout(authenticatedPage)
    await checkout.CheckoutCart();
    await checkout.FillCheckout();
})