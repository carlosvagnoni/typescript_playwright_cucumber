import { PageObject } from "../utils/pageObject";

 /**
 * ProductPage class represents the product page functionalities and elements for the application.
 */
export class ProductPage extends PageObject {

    // Locators for elements on the page
    private readonly macbookTitleLocator: string = "#tbodyid > h2"
    private readonly addToCartButtonLocator: string = "#tbodyid > div.row > div > a"

	// Methods to interact with page elements
    public waitForMacbookTitle(): void {
        this.waitForElementPresent(this.macbookTitleLocator)
    }

    public clickAddToCart(): void {
        this.clickElement(this.addToCartButtonLocator)
        this.wait(1000)
    }

    public verifyAlertSuccessfulAddedToCart(msg: string): void {
        this.verifyTextAlert(msg, 'Product added.')
    }
}