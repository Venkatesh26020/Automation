import { test } from '../Automation_Testing/pages/fixtures';



test('login with fixture', async ({ authenticatedPage }) => {
    await authenticatedPage.waitForTimeout(2000);
});