import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';


test('Search for pliers return only matching products', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');
    const searchPage = new SearchPage(page);
    await searchPage.search('pliers');
    await expect(searchPage.productNames.first()).toContainText(/pliers/i);
});