const homePagePages = require("../pages/homePage.pages")
const ugiFieldbookPages = require("../pages/ugiFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying identify functionality", function(){

    it("Identify functionality for division locations", ()=>{

        ugiFieldbookPages.searchAddress('Akron, PA')
        browser.pause(10000)
        ugiFieldbookPages.clickOnIdentify()
        browser.pause(10000)
        ugiFieldbookPages.clickOnParcel()
        assert.equal($('//*[@id="identifyLayerName"]/b').getText(), 'Parcels')
        ugiFieldbookPages.nextBtn_identify.click()
        assert.equal($('//*[@id="identifyLayerName"]/b').getText(), 'Project')

              
    })

})