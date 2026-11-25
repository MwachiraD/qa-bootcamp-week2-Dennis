import {Locator, Page} from '@playwright/test';

export class SearchPage {
    searchInput: Locator;
    clickSearch: Locator;
    productNames: Locator;

    constructor(private page: Page) {
        this.searchInput = this.page.getByRole('textbox', { name: 'Search' });
        this.clickSearch = this.page.getByRole('button', { name: 'Search' });
        this.productNames = this.page.locator('[data-test="product-name"]');
    }

        async search(searchTerm: string) {
            await this.searchInput.fill(searchTerm);
            await this.clickSearch.click();
        }



}
    


