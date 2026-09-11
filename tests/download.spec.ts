import {test} from "../Automation_Testing/pages/fixtures";
import {expect} from "@playwright/test";
import { Cart } from "../Automation_Testing/pages/AddCart";
import { Checkout } from "../Automation_Testing/pages/Checkout";
import { download } from "../Automation_Testing/downloadpage";


test('download action',async ({authenticatedPage}) => {
    const cart=new Cart(authenticatedPage);
    await cart.additem();
    await cart.checkcartitem();
    const checkout=new Checkout(authenticatedPage);
    await checkout.CheckoutCart();
    await checkout.FillCheckout('Keerthana','S','600100');
    const Download=new download(authenticatedPage);
    const downloadedFile = await Download.download();
    expect(downloadedFile.suggestedFilename()).toBeTruthy();
    expect(await downloadedFile.path()).toBeTruthy();
    
})