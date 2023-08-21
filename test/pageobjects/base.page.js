const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
    /**
    * Opens the main page
    *
    */
    open () {
        return browser.url('https://start.duckduckgo.com/')
    }
}
