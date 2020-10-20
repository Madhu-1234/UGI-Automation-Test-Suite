const homePagePages = require("../pages/homePage.pages")
const ugiFieldbookPages = require("../pages/ugiFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying feature search and reverse geocode", function(){

    it("Should feature search and reverse geocode search", ()=>{

               
        /*
        ***Validating tooltip text for the Main Asset searched for       
        */    
        ugiFieldbookPages.featureLeadSearch_Zip('19608')
        var footerCount= ugiFieldbookPages.checkFooterCount()
        assert.isNotNull(footerCount,'Footer value is null')
        
        //***Validating reverse geocode search              
        browser.pause(7000)
        ugiFieldbookPages.addressRadioBtn.scrollIntoView();
        ugiFieldbookPages.addressRadioBtn.click()
        browser.pause(3000)
        ugiFieldbookPages.searchBar.clearValue()
        ugiFieldbookPages.searchBar.addValue('Akron, PA')
        ugiFieldbookPages.searchButton_searchWindow.click()
        browser.pause(4000)
        ugiFieldbookPages.searchGridResult.click()
        browser.pause(7000)
        ugiFieldbookPages.reverseGeoCodeSearch()
        browser.pause(8000)
        var logo = $('#UGICreateLeadButton_label')
        logo.click({ x: 600, y: 200})
        var x_loc = $('//*[@id="kendoSearchGrid"]/div[4]/table/tbody/tr/td[2]').getText()
        var y_loc = $('//*[@id="kendoSearchGrid"]/div[4]/table/tbody/tr/td[3]').getText()
        assert.isNotNull(x_loc,'x coordinate is null')
        assert.isNotNull(y_loc,'y coordinate is null')
        browser.pause(9000)   
        
        
    })

})