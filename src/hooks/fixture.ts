import { Page } from "@playwright/test";
import { Logger } from "winston";

/**
 * Represents a fixture object that contains properties shared between different parts of the system.
 */
export const fixture = {
    // @ts-ignore
    page: undefined as Page,
    // @ts-ignore
    logger: undefined as Logger,
    
    url: 'https://www.demoblaze.com',
    browser: 'chromium'
}