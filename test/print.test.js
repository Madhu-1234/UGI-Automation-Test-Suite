const homePagePages = require("../pages/homePage.pages")
const ugiFieldbookPages = require("../pages/ugiFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying print functionality", function(){

    it("Should display a new pdf tab for print", ()=>{

        /*
        ***Validating new tab is displayed when user clicks on print
        */
        browser.pause(25000)
        assert.equal
        ugiFieldbookPages.print.click()
        browser.saveFullPageScreen('PDFPrinted');
        expect(browser.checkFullPageScreen('PDFPrinted')).to.equal(0);
    })

})