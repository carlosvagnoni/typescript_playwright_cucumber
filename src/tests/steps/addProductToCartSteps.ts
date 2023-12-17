import { Given, When, Then } from "@cucumber/cucumber";
import { BasePage } from "../../pages/basePage";
import { CartPage } from "../../pages/cartPage";
import { HomePage } from "../../pages/homePage";
import { ProductPage } from "../../pages/productPage";
import { takeScreenshot } from "../../utils/screenshot";

let basePage: BasePage;
let cartPage: CartPage;
let homePage: HomePage;
let productPage: ProductPage;
let msg: string;

// Step definitions using Cucumber syntax
Given('the user is browsing the list of available products.', async function () {
    basePage = new BasePage(this.page)
    cartPage = new CartPage(this.page)
    homePage = new HomePage(this.page)    
    productPage = new ProductPage(this.page)

    await homePage.verifyCurrentUrl('https://www.demoblaze.com/')
    await takeScreenshot(this, 'listOfProducts', this.page)
});

When('the user selects a product from the "laptops" category.', async function () {
    await homePage.clickLaptopsCategoryButton()
	await homePage.waitForMacbookButton()
	await homePage.clickMacbookButton()
});

When('the user adds the selected product to the shopping cart.', async function () {
    this.page.on('dialog', async (alert: any) => {
		msg = alert.message();
		await alert.accept();
	});
    await productPage.waitForMacbookTitle()
	await productPage.clickAddToCart()
    await productPage.waitForAlert()
	await productPage.verifyAlertSuccessfulAddedToCart(msg)
});

Then("the product should be added to the user's shopping cart.", async function () {
    await basePage.clickCartButton()
	await cartPage.waitForMacbookTitleInCart()
	await cartPage.verifyMacbookTitleInCart()
    await takeScreenshot(this, 'productAdded', this.page)
});