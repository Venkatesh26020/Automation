import {test,Page,Locator, Download} from '@playwright/test'

export class download{
    readonly page:Page
    readonly downloadbutton:Locator;

    constructor(page:Page){
        this.page=page;
        this.downloadbutton=page.getByRole('button',{name:'Generate PDF Order'})

    }
    async download(): Promise<Download>{
        const downloadPromise=this.page.waitForEvent('download');
        await this.downloadbutton.click();
        return await downloadPromise;
    }
}
