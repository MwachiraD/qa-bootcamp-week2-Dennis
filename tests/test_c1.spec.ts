import {test, expect} from 'playwright/test';
import {SearchPage} from '../pages/SearchPage';

test('C1: Search for pliers returns all matching products', async ({page}) => {
    await page.goto('https://practicesoftwaretesting.com');
    const searchPage = new SearchPage(page);
    await searchPage.search('pliers');

    await expect(searchPage.productNames).toHaveCount(4);
    const productNames = await searchPage.productNames.allTextContents();
    
    expect(productNames.length).toBeGreaterThan(0);
    console.log('Product Names:', productNames);
    const allMatch = productNames.every(name => name.toLowerCase().includes('pliers'));
    expect(allMatch).toBe(true);
});
