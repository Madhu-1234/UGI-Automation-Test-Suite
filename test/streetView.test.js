const homePagePages = require("../pages/homePage.pages")
const ugiFieldbookPages = require("../pages/ugiFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying Google StreetView", function(){

    it("Should verify Google streetview", ()=>{

        ugiFieldbookPages.searchAddress('2701 Shore Road, Ocean View, NJ 08230, USA')               
        ugiFieldbookPages.clickOnStreetViewBtn()
        ugiFieldbookPages.clickOnLocationForStreetView()
        /*
        ***Validating streetView window is displayed
        ***Validating that the streetView address displayed is same as that the address searched
        */
        var streetView_street = ugiFieldbookPages.addressDisplayedStreetView()
        assert.isTrue($('#svWindow_wnd_title').isDisplayed())
        assert.equal('2701 Shore Road', streetView_street)          
               
    })

})