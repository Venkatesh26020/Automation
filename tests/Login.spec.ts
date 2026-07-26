import{test,expect} from '@playwright/test';
import { InvalidLogin, Loginpage } from '../Automation_Testing/pages/loginpage';

test('Login Functionality',async ({page}) => {
    const loginpage=new Loginpage(page);
    await loginpage.goto();
    await loginpage.login('student','Password123');
    await page.waitForTimeout(2000);
})

test('Invalid Login',async ({page}) => {

    const invalidLogin=new InvalidLogin(page);
    await invalidLogin.goto();
    await invalidLogin.invalidlogin('Venkatesh','123');
    
})