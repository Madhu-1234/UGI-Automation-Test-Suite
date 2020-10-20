const homePagePages = require("../pages/homePage.pages")
const ugiFieldbookPages = require("../pages/ugiFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying print functionality", function(){

    it("Should display a new pdf tab for print", ()=>{

        /*
        ***Validating new tab is displayed when user clicks on print
        */
        browser.pause(10000)
        assert.equal(true, ugiFieldbookPages.print.isClickable())
        ugiFieldbookPages.print.click()
        browser.pause(4000)
        //browser.saveFullPageScreen('PDFPrinted');
        //expect(browser.checkFullPageScreen('PDFPrinted')).to.equal(0);
    })

})