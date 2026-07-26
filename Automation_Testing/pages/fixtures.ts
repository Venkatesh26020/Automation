import { test as Base, type Page } from '@playwright/test';
import { Login } from './login';

export const test = Base.extend<{ authenticatedPage: Page }>({
    authenticatedPage: async ({page},use) => {
        const login=new Login(page);
        await login.goto();
        await login.login('standard_user','secret_sauce');
        await use(page);
        
    }}
)