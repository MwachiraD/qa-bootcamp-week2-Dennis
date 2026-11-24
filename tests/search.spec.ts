import { test, expect } from '@playwright/test';

test('Search for pliers returns only matching products', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');

    await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
    await page.getByRole('button', { name: 'Search' }).click();

    const productNames = await page.locator('[data-test="product-name"]').allTextContents();

    

    for (const name of productNames) {
        expect(name.toLowerCase()).toContain('pliers');
    }
});