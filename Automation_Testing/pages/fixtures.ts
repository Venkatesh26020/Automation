import { test as Base, type Page } from '@playwright/test';
import { Login } from './login';

export const test = Base.extend<{ authenticatedPage: Page }>({
    authenticatedPage: async ({page},use) => {
        // await page.goto('https://www.saucedemo.com/');
        // await page.getByPlaceholder('Username');
        // await page.getByPlaceholder('Password');
        // await page.getByTestId('login-button');
        const login=new Login(page);
        await login.goto();
        await login.login('standard_user','secret_sauce');
        await use(page);   
    }}
)