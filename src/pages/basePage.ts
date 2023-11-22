import { Page } from "@playwright/test";
import { PageObject } from "../utils/pageObject";

/**
 * Class representing the header and footer of the application.
 */
export class BasePage extends PageObject {
    constructor(page: Page) {
        super(page);
    }

    // Locators for elements on the page
    private readonly signupButtonLocator: string = "#signin2"
    private readonly signupTitleLocator: string = "#signInModalLabel"
    private readonly loginButtonLocator: string = "#login2"
    private readonly loginTitleLocator: string = "#logInModalLabel"
    private readonly signupUsernameInputLocator: string = "#sign-username"
    private readonly signupPasswordInputLocator: string = "#sign-password"
    private readonly loginUsernameInputLocator: string = "#loginusername"
    private readonly loginPasswordInputLocator: string = "#loginpassword"
    private readonly submitSignupButtonLocator: string = "#signInModal > div > div > div.modal-footer > button.btn.btn-primary"
    private readonly submitLoginButtonLocator: string = "#logInModal > div > div > div.modal-footer > button.btn.btn-primary"
    private readonly loggedInUsernameLocator: string = "#nameofuser"
    private readonly cartButtonLocator: string = "#cartur"

    // Methods to interact with page elements
    public async clickSignupButton(): Promise<void> {
        await this.clickElement(this.signupButtonLocator)
    }

    public async waitForSignupTitle(): Promise<void> {
        await this.waitForElementBeVisible(this.signupTitleLocator)
        await this.wait(500)
    }

    public async verifySignupTitle(): Promise<void> {
        await this.verifyElementInnerText(this.signupTitleLocator, "Sign up")
    }

    public async clickLoginButton(): Promise<void> {
        await this.clickElement(this.loginButtonLocator)
    }

    public async waitForLoginTitle(): Promise<void> {
        await this.waitForElementBeVisible(this.loginTitleLocator)
        await this.wait(500)
    }

    public async verifyLoginTitle(): Promise<void> {
        await this.verifyElementInnerText(this.loginTitleLocator, "Log in")
    }

    public async enterLoginUsername(text: string): Promise<void> {
        await this.enterText(this.loginUsernameInputLocator, text)
    }

    public async enterLoginPassword(text: string): Promise<void> {
        await this.enterText(this.loginPasswordInputLocator, text)
    }

    public async enterSignupUsername(text: string): Promise<void> {
        await this.enterText(this.signupUsernameInputLocator, text)
    }

    public async enterSignupPassword(text: string): Promise<void> {
        await this.enterText(this.signupPasswordInputLocator, text)
    }

    public async verifyEnteredCredentials(username: string, password: string): Promise<void> {
        await this.verifyElementTextValue(this.signupUsernameInputLocator, username)
        await this.verifyElementTextValue(this.signupPasswordInputLocator, password)
    }

    public async submitSignup(): Promise<void> {
        await this.clickElement(this.submitSignupButtonLocator)
    }

    public async verifyAlertSuccessfulSignup(msg: string): Promise<void> {
        await this.verifyTextAlert(msg, 'Sign up successful.')
    }

    public async submitLogin(): Promise<void> {
        await this.clickElement(this.submitLoginButtonLocator)
    }

    public async waitForLoggedInUsername(username: string): Promise<void> {
        await this.waitForElementToDisappear(this.loginTitleLocator);
        await this.waitForElementInnerTextToBe(this.loggedInUsernameLocator, `Welcome ${username}`);
      }

    public async verifyLoggedInUsername(username: string): Promise<void> {
        await this.verifyElementInnerText(this.loggedInUsernameLocator, `Welcome ${username}`)
    }

    public async clickCartButton(): Promise<void> {
        await this.clickElement(this.cartButtonLocator)
    }
}