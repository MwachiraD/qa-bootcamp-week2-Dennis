import { test, expect } from '@playwright/test';

test('Search for pliers returns only matching products', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');
    const searchResponse = page.waitForResponse(response =>
    response.url().includes('/products/search')
);
    await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
    await page.getByRole('button', { name: 'Search' }).click();
    const response = await searchResponse;
    console.log('SEARCH API:', response.url());
    console.log('STATUS:', response.status());
    const productLocator = page.locator('[data-test="product-name"]');

    await expect(productLocator.first()).toContainText(/pliers/i);
    await expect(productLocator.first()).toBeVisible();
    const productNames = await productLocator.allTextContents();
    console.log('PRODUCTS:', productNames);

    for (const name of productNames) {
        expect(name.toLowerCase()).toContain('pliers');
    }
});