const homePagePages = require("../pages/homePage.pages")
const ugiFieldbookPages = require("../pages/ugiFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying print functionality", function(){

    it("Should display a new pdf tab for print", ()=>{

        /*
        ***Validating new tab is displayed when user clicks on print
        */
        ugiFieldbookPages.print.click()
        browser.pause(25000)
        var windowHandles = browser.getWindowHandles()
        console.log(windowHandles)
        browser.switchToWindow(windowHandles[2])
        browser.saveFullPageScreen('PDFPrinted');
        expect(browser.checkFullPageScreen('PDFPrinted')).to.equal(0);
    })

})