# Front tests

## Requirements

-   [node.js](https://nodejs.org/)
-   [WebdriverIO](https://webdriver.io)
-   [Allure-reporter](https://github.com/bahmutov/cypress-if)

## Setup

1. Clone this repository to your local machine
2. Download node.js (preferable 16.x version)
3. Enter the following command to your terminal in the root folder:
    ```bash
     npm install
    ```

## Execution

-   To run all tests with Chrome:
    `npm run wdio`
-   To run all tests with Chrome in headless mode:
    `npm run chrome`
-   To run all tests with Firefox:
    `npm run firefox`
-   To run all tests with Microsoft Edge:
    `npm run edge`
-   To generate allure report:
    `npm run allure:generate`
-   To open allure report:
    `npm run allure:open`
-   To clean allure results:
    `npm run allure:clean`

## Reports and results

-   You will find allure report at [githubpages](https://ihorkk.github.io/mocha_wdio/)
