import { Page, expect } from "@playwright/test";

/*
Class acting as a wrapper for Playwright actions.
It encapsulates common actions performed on a Page object.
Each method represents a specific action such as clicking elements, waiting for elements,
verifying text, handling alerts, and interacting with elements on a web page.
*/
export class PageObject {
    constructor(private page: Page) { }

    public async clickElement(elementLocator: string): Promise<void> {
        await this.page.locator(elementLocator).click()
    }

    public async waitForElementBeVisible(elementLocator: string): Promise<void> {
        await this.page.locator(elementLocator).waitFor({ state: 'visible' })
    }

    public async waitForElementPresent(elementLocator: string): Promise<void> {
        await this.page.locator(elementLocator).waitFor({ state: 'attached' })
    }

    public async waitForElementToDisappear(elementLocator: string): Promise<void> {
        await this.page.locator(elementLocator).waitFor({ state: 'hidden' })
    }

    public async waitForElementInnerTextToBe(elementLocator: string, expectedText: string): Promise<void> {
        await this.page.waitForFunction(
            `document.querySelector("${elementLocator}").innerText === "${expectedText}"`
        )
    }

    public async verifyElementInnerText(elementLocator: string, expectedText: string): Promise<void> {
        const elementInnerText = await this.page.innerText(elementLocator)
        expect(elementInnerText).toBe(expectedText)
    }

    public async verifyElementTextValue(elementLocator: string, expectedText: string): Promise<void> {
        const elementTextValue = await this.page.inputValue(elementLocator)
        expect(elementTextValue).toBe(expectedText)
    }

    public async waitForAlert(): Promise<void> {
        await this.page.waitForEvent('dialog')
    }

    public async verifyTextAlert(msg: string, expectedText: string): Promise<void> {
        expect(msg).toBe(expectedText);
    }

    public async enterText(elementLocator: string, text: string): Promise<void> {
        await this.page.fill(elementLocator, text);
    }

    public async verifyCurrentUrl(expectedUrl: string): Promise<void> {
        const currentUrl = await this.page.url()
        expect(currentUrl).toBe(expectedUrl)
    }

    public wait(ms: number): Promise<void> {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

}