ñ# Automated Web Testing with TypeScript, Playwright, and Cucumber 🤖 🆃🆂 🎭

This project provides a structure and tools for automated web testing using TypeScript, Playwright, and Cucumber, following Behavior-Driven Development (BDD) best practices and employing the Page Object Model design pattern.

## Testing demoblaze.com Features 🧪

This suite of tests is specifically designed to validate and test features on the [demoblaze.com](https://www.demoblaze.com) website. You'll find feature files under the `tests/features` directory related to signup, login and adding products to the cart.

![Typescript2](https://github.com/carlosvagnoni/typescript_playwright_cucumber/assets/106275103/2ea482af-5a3b-4bd4-a56d-00e45d33aa16)

## Table of Contents 📑
- [Requirements](#requirements)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Test Execution](#test-execution)
- [Contact](#contact)

## <a id="requirements">Requirements 📋</a>

- Node.js 21.2.0
- @cucumber/cucumber: 10.0.1
- @playwright/test: 1.40.0
- @types/node: 20.9.2
- ts-node: 10.9.1
- winston: 3.11.0

## <a id="folder-structure">Folder Structure 📂</a>

- **cucumber.json:** Configuration or generated output by Cucumber.
- **package-lock.json:** Specific details about exact dependency versions for the project.
- **package.json:** Project configuration file for Node.js.
- **run.bat:** Script specifically designed for execution in Windows environments.

### Directory "src"

- **hooks:** Directory with files related to hooks for tests.
  - **fixture.ts:** File with pre-defined test configurations.
  - **hooks.ts:** File with custom hooks for tests.

- **pages:** Directory containing Page Object Model classes.

- **tests:** Directory containing test files and specifications.
  - **features:** Subdirectory containing specification files in Gherkin format.
  - **steps:** Directory containing files with steps for the specifications.

- **utils:** Directory containing utility functions for tests.
  - **browsers.ts:** Class responsible for managing different browser instances using Playwright.
  - **logger.ts:** Defines the options for logger configuration.
  - **pageObject.ts:** Class acting as a wrapper for Playwright actions.
  - **screenshot.ts:** Function for taking screenshots and attach them to an cucumber html report.

## <a id="installation">Installation 🛠️</a>

1. Clone this repository:

    ```bash
    git clone https://github.com/carlosvagnoni/typescript_playwright_cucumber.git
    cd typescript_playwright_cucumber
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## <a id="configuration">Configuration ⚙️</a>

- Make sure you have a browser installed and configured in the script (Chrome, Firefox, or Safari).
- You can configure the fixture.ts file to adjust parameters such as the base URL(url) and browser.

## <a id="test-execution">Test Execution ▶️</a>

Run all the tests:

```bash
npm run test
```

Open report:

```bash
start "" "test-results\reports\cucumber_report.html"
```

**NOTE:**

- Set up the respective environment variables beforehand.
- On Windows environments, you can directly execute the `run.bat` file.

## <a id="contact">Contact 📧</a>

If you have any questions or suggestions, feel free to contact me through my social media accounts.

Thank you for your interest in this project!
