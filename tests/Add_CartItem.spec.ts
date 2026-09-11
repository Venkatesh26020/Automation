import { test } from '../Automation_Testing/pages/fixtures';
import { Cart } from '../Automation_Testing/pages/AddCart';
import { Login } from '../Automation_Testing/pages/login';

test('Add Item', async ({ authenticatedPage }) => {
    const cart = new Cart(authenticatedPage);
    await cart.additem();
});

test('CheckCartitem', async({authenticatedPage})=>{
    const checkcart=new Cart(authenticatedPage);
    await checkcart.checkcartitem();
})

test('continue shopping',async({authenticatedPage})=>{
    const continueshop=new Cart(authenticatedPage);
    await continueshop.continueshopping();
})
