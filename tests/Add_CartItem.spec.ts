import { test } from '../Automation_Testing/pages/fixtures';
import { Cart } from '../Automation_Testing/pages/AddCart';

test('Add Item', async ({ authenticatedPage }) => {
    const cart = new Cart(authenticatedPage);
    await cart.additem();
    await authenticatedPage.waitForTimeout(2000);
});