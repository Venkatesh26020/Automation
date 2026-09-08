import { test } from '../Automation_Testing/pages/fixtures';
import { Cart } from '../Automation_Testing/pages/AddCart';

test('Add Item', async ({ authenticatedPage }) => {
    const cart = new Cart(authenticatedPage);
    await cart.additem();
    await authenticatedPage.waitForTimeout(2000);
});

test('CheckCartitem', async({page})=>{
    const checkcart=new Cart(page);
    await checkcart.checkcartitem();
    await page.waitForTimeout(2000);
})