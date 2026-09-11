import { test } from '../Automation_Testing/pages/fixtures';
import { Login } from '../Automation_Testing/pages/login';



test('login with fixture', async ({ authenticatedPage }) => {
});

test('Invalid Login', async({page})=>{
    const invalid=new Login(page)
    await invalid.goto()
    await invalid.Invalidlogin('standard_user','secret')
})