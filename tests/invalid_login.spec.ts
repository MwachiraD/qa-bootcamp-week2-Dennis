import { test, expect } from '@playwright/test';

test('Invalid login shows error message', async ({page}) => {
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/auth/login');
    await page.locator('[data-test="email"]').fill('invalid@example.com');
    await page.locator('[data-test="password"]').fill('wrongpassword');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('.help-block')).toHaveText('Invalid email or password');
});