import { Page } from "@playwright/test"

/*
Attaches a screenshot to an cucumber html report.
*/
export async function takeScreenshot(testContext: any, filename: string, page: Page) {
    const screenshot = await page.screenshot({ path: `test-results/screenshots/${filename}.png`, type: 'png'})
    await testContext.attach(screenshot, 'image/png')
}