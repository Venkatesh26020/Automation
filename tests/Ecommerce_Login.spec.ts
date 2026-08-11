import { test } from '../Automation_Testing/pages/fixtures';
import { Login } from '../Automation_Testing/pages/login';



test('login with fixture', async ({ authenticatedPage }) => {
    await authenticatedPage.waitForTimeout(2000);
});

test('Invalid Login', async({authenticatedPage})=>{    
   const invalid=new Login(authenticatedPage);
   await invalid.Invalidlogin('standard_user','secret')
})