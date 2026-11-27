import { test, expect } from '@playwright/test';

test('Products API returns products successfully', async ({ request, page }) => {
    // Your implementation here
    const response = await request.get('https://api-with-bugs.practicesoftwaretesting.com/products');
    expect(response.status()).toBe(200);
    const products = await response.json();
    expect(products.data[0].name).toBe('Combination Pliers');
    
    
});