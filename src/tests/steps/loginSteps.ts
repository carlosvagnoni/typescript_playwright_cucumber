import { Given, When, Then } from "@cucumber/cucumber";
import { BasePage } from "../../pages/basePage";
import { fixture } from "../../hooks/fixture";
import { takeScreenshot } from "../../utils/screenshot";

let basePage: BasePage;
let username: string;
let password: string;

// Step definitions using Cucumber syntax
Given('the user has signed up with credentials: {string}, {string}.', async function (user: string, pass: string) {
    basePage = new BasePage(fixture.page)
    username = user
	password = pass
});

Then('the user is on the Login Page.', async function () {
    await basePage.clickLoginButton()
	await basePage.waitForLoginTitle()
	await basePage.verifyLoginTitle()
    await takeScreenshot(this, 'loginPage', fixture.page)
});

When('the user inputs their username and password into the form.', async function () {
    await basePage.enterLoginUsername(username)
	await basePage.enterLoginPassword(password)
});

When('the user clicks on the Submit button.', async function () {
    await basePage.submitLogin()
});

Then('the user should be logged in.', async function () {
    await basePage.waitForLoggedInUsername(username)
	await basePage.verifyLoggedInUsername(username)
    await takeScreenshot(this, 'userLoggedIn', fixture.page)
});
