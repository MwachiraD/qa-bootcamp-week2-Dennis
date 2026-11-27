
import { test, expect } from '@playwright/test';

test('Create cart, add product and verify response', async ({ request }) => {
    // Create a new cart
    const cartResponse = await request.post(
        'https://api.practicesoftwaretesting.com/carts',
        {
            headers: {
                Accept: 'application/json',
            },
        }
    );
    console.log('Status:', cartResponse.status());
    console.log('Response:', await cartResponse.text());
    expect(cartResponse.status()).toBe(201);

    const cartData = await cartResponse.json();
    const cartId = cartData.id;

    expect(cartId).toBeDefined();

    try {
        // Add a product to the cart
        const productResponse = await request.post(
            `https://api.practicesoftwaretesting.com/carts/${cartId}`,
            {
                headers: {
                    Accept: 'application/json',
                },
                data: {
                    product_id: '01M8EMX6Y43DWP02YWKGMPXAM5',
                    quantity: 2,
                },
            }
        );
        const verifyResponse = await request.get(
    `https://api.practicesoftwaretesting.com/carts/${cartId}`
);      
        expect(verifyResponse.status()).toBe(200);

        const verifyData = await verifyResponse.json();
        expect(verifyData.cart_items[0].quantity).toBe(3);
        expect(verifyData.cart_items[0].product.name).toBe('Combination Pliers');
        console.log('Add product response:', await productResponse.text());
        expect(productResponse.status()).toBe(200);

        const productData = await productResponse.json();
        
        expect(productData.result).toBe('item added or updated');

    } finally {
        // Clean up: Delete the cart, even if the product test fails
        const deleteResponse = await request.delete(
            `https://api.practicesoftwaretesting.com/carts/${cartId}`
        );

        expect(deleteResponse.status()).toBe(204);
    }
});


test('Request a nonexistent cart and verify 404 response', async ({ request }) => {
    const response = await request.get(
        'https://api.practicesoftwaretesting.com/carts/this-cart-does-not-exist',
        {
            headers: {
                Accept: 'application/json',
            },
        }
    );

    expect(response.status()).toBe(404);
});
