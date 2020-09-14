const homePagePages = require("../pages/homePage.pages")
const ugiFieldbookPages = require("../pages/ugiFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying basemap components", function(){

    it("Should verify different components of the basemap", ()=>{

        ugiFieldbookPages.homeBtn.click();
        
        /*
        ***Validating different basemaps are displayed
        */
       
        //Validating google hybrid map screenshot
        ugiFieldbookPages.baseMap.click()
        browser.pause(9000)
        ugiFieldbookPages.clickGoogleHybridMap();
        browser.saveFullPageScreen('googleHybirdMap');
        expect(browser.checkFullPageScreen('googleHybridMap')).to.equal(0);

        //Validating google hybrid map screenshot
        
        ugiFieldbookPages.clickGoogleRoadMap();
        browser.saveFullPageScreen('googleRoadMap');
        expect(browser.checkFullPageScreen('googleMapRoad')).to.equal(0);

        ugiFieldbookPages.clickDarkGreyCanvasMap();
        browser.saveFullPageScreen('darkGreyCanvas');
        expect(browser.checkFullPageScreen('darkGreyCanvas')).to.equal(0);

        
        
        
        /*
        assert.equal(true, ugiFieldbookPages.streets_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.topographic_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.openStreetMap_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.usaTopoMap_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.usgsNationalMap_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.terrainWithLabels_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.oceans_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.nationalGeo_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.darkGreyCanvas_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.lightGreyCanvas_baseMap.isClickable())
        assert.equal(true, ugiFieldbookPages.esriClarity_baseMap.isClickable())
        */
      
    })

})
