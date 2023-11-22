import { Page } from "@playwright/test";
import { PageObject } from "../utils/pageObject";

/**
 * HomePage class represents the home page functionalities and elements for the application.
 */
export class HomePage extends PageObject {
    constructor(page: Page) {
        super(page);
    }

    // Locators for elements on the page
    private readonly laptopsCategoryButtonLocator: string = "div:nth-of-type(1) > a#itemc.list-group-item:nth-of-type(3)"
    private readonly macbookButtonLocator: string = "#tbodyid > div:nth-child(3) > div > div > h4 > a"

	// Methods to interact with page elements
    public async clickLaptopsCategoryButton(): Promise<void> {
        await this.clickElement(this.laptopsCategoryButtonLocator)
    }

    public async waitForMacbookButton(): Promise<void> {
        await this.waitForElementInnerTextToBe(this.macbookButtonLocator, "MacBook air")
    }

    public async clickMacbookButton(): Promise<void> {
        await this.clickElement(this.macbookButtonLocator)
    }
}