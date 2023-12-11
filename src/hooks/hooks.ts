import { BeforeAll, AfterAll , Before, After, BeforeStep, AfterStep, Status} from "@cucumber/cucumber"
import {Browsers} from '../utils/browsers'
import { Browser, Page, BrowserContext } from '@playwright/test';
import { fixture } from "./fixture";
import { takeScreenshot } from "../utils/screenshot";
import { createLogger } from "winston";
import { options } from "../utils/logger";

/*
Hooks for test automation with TypeScript, Playwright, and Cucumber.
This code defines actions before and after test scenarios on the website "https://www.demoblaze.com".
*/

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await new Browsers(fixture.browser, fixture.headlessMode).browser!
    fixture.logger = createLogger(options())
    fixture.logger.info('Running typescript_playwright_cucumber project...')
})

Before(async function ({pickle}) {
    fixture.logger.info(`Running scenario: ${pickle.name}`)
    context = await browser.newContext({ viewport: null });
    const page = await context.newPage();
    fixture.page = page;
    await fixture.page.goto(fixture.url)
})

After(async function ({ pickle, result }) {
    switch (result?.status) {
        case Status.SKIPPED:
            fixture.logger.info(`Scenario: ${pickle.name} was skipped`)
            break
        case Status.PASSED:
            fixture.logger.info(`Scenario: ${pickle.name} passed`)
            break
        case Status.FAILED:
            await takeScreenshot(this, `failedScenario_${pickle.name}`, fixture.page)
            fixture.logger.error(`Scenario: ${pickle.name} failed`)
            break            
    }

    await fixture.page.close()
    await context.close()
})

AfterAll(async function () {
    await browser.close()
})