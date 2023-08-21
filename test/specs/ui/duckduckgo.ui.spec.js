const { expect} = require('@wdio/globals')
//const expect = require('chai').expect;
const HomePage = require('../../pageobjects/home.page')
const SearchResultsPage = require('../../pageobjects/search.results.page')


describe('Duck Duckgo search text', () => {

    it('should have "android" in the title', async () => {
        await HomePage.open()
        await HomePage.searchText("android")

        const resultTitles = await SearchResultsPage.getTitleElements()
        for (const titleElement of resultTitles) {

           await expect(await titleElement).toHaveTextContaining('android',{ ignoreCase: true });

           // const titleText = await titleElement.getText();
            //expect(titleText.toLowerCase()).to.include('android')
        }
    })

    it('should be All regions total count greater than 10', async () => {
        await SearchResultsPage.clickAllRegions()
        const regionsList = await SearchResultsPage.regions
        await expect(regionsList).toHaveChildren({ gte: 11 })
    })
})

