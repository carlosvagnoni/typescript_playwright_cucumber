/**
 * Represents a fixture object that contains properties shared between different parts of the system.
 */
export const fixture = {    
    url: 'https://www.demoblaze.com',
    browser: process.env.BROWSER ?? "chromium",
    headlessMode: false
}