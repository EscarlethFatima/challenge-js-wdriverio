const { $ } = require('@wdio/globals')
const BasePage = require("./base.page");

class SearchResultsPage extends BasePage{
     get resultTitleElements() {
        return $$('a[data-testid="result-title-a"]')
    };
    get allRegionsWrapperLink() {
        return $('a.dropdown__button.dropdown__button.js-dropdown-button.all')
    };

    get allRegions() {
        return $$('li.modal__list__item')
    };

    get regions() {
        return $$('ol.modal__list.js-region-filter-list')
    };
    async clickAllRegions() {
        await this.allRegionsWrapperLink.click()
    }

    async getTitleElements() {
       return this.resultTitleElements;
    }
}

module.exports = new SearchResultsPage();