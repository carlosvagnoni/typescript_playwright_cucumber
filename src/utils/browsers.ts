import { chromium, firefox, webkit, Browser } from '@playwright/test';

/*
Class responsible for managing different browser instances using Playwright.
It provides methods to launch Chromium, Firefox, or WebKit browsers based on the specified type.
The class initializes the browser type and headless mode settings upon instantiation.
*/
export class Browsers {
  private isHeadless: boolean;
  public browser: Promise<Browser> | null = null;

  constructor(private browserType: string, isHeadless = false) {
    this.isHeadless = isHeadless;
    this.browser = this.getBrowser()
  }

  private async getBrowser(): Promise<Browser> {
    switch (this.browserType) {
      case 'chromium':
        return await this.chromiumBrowser();
      case 'firefox':
        return await this.firefoxBrowser();
      case 'webkit':
        return await this.webkitBrowser();
      default:
        throw new Error(`Unsupported browserType: ${this.browserType}`);
    }
  }

  private async chromiumBrowser(): Promise<Browser> {
    return await chromium.launch({
      args: ["--start-maximized"],
      headless: this.isHeadless,
    });
  }

  private async firefoxBrowser(): Promise<Browser> {
    return await firefox.launch({
      headless: this.isHeadless,
    });
  }

  private async webkitBrowser(): Promise<Browser> {
    return await webkit.launch({
      headless: this.isHeadless,
    });
  }
}