import { test, expect } from '@playwright/test';

test('Save with fixed wait', async ({ page }) => {
    await page.goto('file://' + process.cwd() + '/tests/drill/index.html');
    await page.locator('#save').click();

    await expect(page.locator('#status')).toHaveText('Saved');
});