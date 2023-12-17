import { Before, After, Status} from "@cucumber/cucumber"
import {Browsers} from '../utils/browsers'
import { Browser, Page, BrowserContext } from '@playwright/test';
import { fixture } from "./fixture";
import { takeScreenshot } from "../utils/screenshot";
import { createLogger, Logger } from "winston";
import { options } from "../utils/logger";

/*
Hooks for test automation with TypeScript, Playwright, and Cucumber.
This code defines actions before and after test scenarios on the website "https://www.demoblaze.com".
*/

let browser: Browser;
let context: BrowserContext;
let logger: Logger;

Before(async function (this: { browser: Browser, context: BrowserContext, page: Page, logger: Logger }, {pickle}) {
    browser = await new Browsers(fixture.browser, fixture.headlessMode).browser!
    logger = createLogger(options())
    logger.info(`Running scenario: ${pickle.name}`)
    context = await browser.newContext({ viewport: null });
    const page = await context.newPage();
    await page.goto(fixture.url)
    this.browser = browser
    this.logger = logger
    this.context = context
    this.page = page;
})

After(async function (this: { browser: Browser, context: BrowserContext, page: Page, logger: Logger }, { pickle, result }) {
    switch (result?.status) {
        case Status.SKIPPED:
            this.logger.info(`Scenario: ${pickle.name} was skipped`)
            break
        case Status.PASSED:
            this.logger.info(`Scenario: ${pickle.name} passed`)
            break
        case Status.FAILED:
            await takeScreenshot(this, `failedScenario_${pickle.name}`, this.page)
            this.logger.error(`Scenario: ${pickle.name} failed`)
            break            
    }

    await this.page.close()
    await this.context.close()
    await this.browser.close()
})