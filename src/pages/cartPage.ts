import { PageObject } from "../utils/pageObject";

/**
 * CartPage class represents the cart page functionalities and elements for the application.
 */
export class CartPage extends PageObject {

    // Locators for elements on the page
    private readonly macbookTitleInCartLocator: string = "table > tbody > tr:first-child > td:nth-child(2)"
	
	// Methods to interact with page elements
    public async waitForMacbookTitleInCart(): Promise<void> {
        await this.waitForElementPresent(this.macbookTitleInCartLocator)
        await this.waitForElementInnerTextToBe(this.macbookTitleInCartLocator, "MacBook air")
    }

    public async verifyMacbookTitleInCart(): Promise<void> {
        await this.waitForElementInnerTextToBe(this.macbookTitleInCartLocator, "MacBook air")
    }
}