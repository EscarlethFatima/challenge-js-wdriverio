const { $ } = require('@wdio/globals')
const BasePage = require('../pageobjects/base.page');
class HomePage extends BasePage{
    get inputSearchText() {return $('#search_form_input_homepage')};

    get btnSearch() {return $('#search_button_homepage')};


    /**
     * Search for the word
     * @param {String } text to search.
     */
    async searchText(text) {
        await this.inputSearchText.setValue(text)
        await this.btnSearch.click()
    }

}

module.exports = new HomePage();