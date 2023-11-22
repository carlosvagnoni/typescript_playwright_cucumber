import { Given, When, Then } from "@cucumber/cucumber";
import { BasePage } from "../../pages/basePage";
import { fixture } from "../../hooks/fixture";
import { takeScreenshot } from "../../utils/screenshot";

let basePage: BasePage;
let username: string | undefined;
let password: string | undefined;
let msg: string;

// Step definitions using Cucumber syntax
Given('the user is on the Registration Page.', async function () {
	basePage = new BasePage(fixture.page)
	await basePage.clickSignupButton()
	await basePage.waitForSignupTitle()
	await basePage.verifySignupTitle()
	await takeScreenshot(this, 'signupPage', fixture.page)
});

When('the user provides the following registration details: {string}, {string}.', async function (user: string,pass: string) {
    username = user
	password = pass
	await basePage.enterSignupUsername(username)
	await basePage.enterSignupPassword(password)
	await basePage.verifyEnteredCredentials(username, password)
	await takeScreenshot(this, 'signupCredentials', fixture.page)
});

When('the user clicks on the Sign Up button.', async function () {
	fixture.page.on('dialog', async alert => {
		msg = alert.message();
		await alert.accept();
	});
    await basePage.submitSignup()
	await basePage.waitForAlert()
});

Then('the user should be registered successfully.', async function () {
    await basePage.verifyAlertSuccessfulSignup(msg)
});
