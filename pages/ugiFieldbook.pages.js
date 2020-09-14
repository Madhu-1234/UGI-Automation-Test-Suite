const { project } = require("./legend.pages")

class ugiFieldBookPages{

    /*
    ***Object repository of main menu options
    */
    get legend() { return $('#legendButton_label') }
    get zoomIn() { return $('//*[@id="map_zoom_slider"]/div[1]/span')}
    get baseMap() { return $('//*[@id="webmap-toolbar-Basemap1"]/button') }
    get documents() { return $('#dmsButton_label') }
    get search() { return $('#searchButton') }
    get identifyButton() { return $('#identifyButton') }
    get streetView() { return $('#streetviewButton_label') }
    get print() {return $('//*[@id="dijit_form_ComboButton_0_label"]') }
    get measure() {return $('#measureButton_label') }
    get homeBtn() {return $('//*[@id="HomeButton"]/div/div')}
    get project() {return $('//*[@id="id_UGIProj"]/a')}
    get nextBtn_identify(){ return $('//*[@id="nextIdentify"]/a')}
    

    /*
    ***Object repository of basemap elements
    */
    get googleHybrid_baseMap() {return $('//*[@id="galleryNode_GoogleHybrid"]/a/img')}
    get googleRoad_baseMap() {return $('//*[@id="galleryNode_GoogleRoad"]/a/img')}
    get googleSatellite_baseMap() {return $('//*[@id="galleryNode_GoogleSatellite"]/a/img')}
    get imagery_basemap() { return $('//*[@id="galleryNode_EsriImagery"]/a/img')}
    get streets_baseMap() {return $('//*[@id="galleryNode_Streets"]/a/img')}
    get topographic_baseMap() {return $('//*[@id="galleryNode_Topographic"]/a/img')}
    get openStreetMap_baseMap() {return $('//*[@id="galleryNode_OpenStreetmap"]/a/img')}
    get usaTopoMap_baseMap() {return $('//*[@id="galleryNode_USATopoMaps"]/a/img')}
    get usgsNationalMap_baseMap() {return $('//*[@id="galleryNode_USGSNationalMap"]/a/img')}
    get terrainWithLabels_baseMap() {return $('//*[@id="galleryNode_Terrain"]/a/img')}
    get oceans_baseMap() {return $('//*[@id="galleryNode_Oceans"]/a/img')}
    get nationalGeo_baseMap() {return $('//*[@id="galleryNode_NationalGeographic"]/a/img')}
    get darkGreyCanvas_baseMap() {return $('//*[@id="galleryNode_DarkGrayCanvas"]/a/img')}
    get lightGreyCanvas_baseMap() {return $('//*[@id="galleryNode_LightGrayCanvas"]/a/img')}
    get esriClarity_baseMap() {return $('//*[@id="galleryNode_ESRIClarity"]/a/img')}
    
    /*
    ***Object repository of searchbox elements
    */
    get searchBar() {return $('#searchBox')}
    get searchGridResult() {return $('//*[@id="kendoSearchGrid"]/div[4]/table/tbody/tr')}
    get searchButton_searchWindow() {return $('#searchWidgetButton')}
    get searchWindowClose() {return $('/html/body/div[12]/div[1]/div/a[2]/span')}
    get featureSearchDrpdown() {return $('//*[@id="featureSearchRow"]/div[1]/span')}
    get featureSearchFieldDrpdown() {return $('//*[@id="featureSearchRow"]/div[2]/span')}
    get featureRadioBtn() {return $('//*[@id="featureRadionButton"]/div')}
    get reverseGeoCodeRadioBtn(){return $('//*[@id="reverseGeocodeButton"]')}

    /*
    ***Object repository of measure elements
    */
    get measureAreaBtn(){return $('//*[@id="dijit_form_ToggleButton_0"]/span[1]')}
    get measureDistanceBtn(){return $('//*[@id="dijit_form_ToggleButton_1"]/span[1]')}
    get measureLocationBtn(){return $('//*[@id="dijit_form_ToggleButton_2"]/span[1]')}


    



    clickLegend(){        
        this.legend.click()
    }

    zoomToEnableLegend(){
        var i 
        for( i=0;i<10;i++){
            this.zoomIn.click()
        }
    }

    scrollToValve(){

        this.valveAsset_legend.moveTo()
        
    }

    clickBaseMap(){
        this.baseMap.click()
    }

    clickGoogleHybridMap(){
        
        this.baseMap.click()
        browser.pause(3000)
        this.googleHybrid_baseMap.click()
        browser.pause(7000)
    }

    clickGoogleRoadMap(){
        this.baseMap.click()
        this.googleRoad_baseMap.click()
        browser.pause(7000)
    }

    clickGoogleSatelliteMap(){
        this.baseMap.click()
        this.googleSatellite_baseMap.click()
        browser.pause(7000)
    }

    clickImageryMap(){
        this.baseMap.click()
        this.imagery_basemap.click()
        browser.pause(7000)
    }

    clickStreetsMap(){
        this.baseMap.click()
        this.streets_baseMap.click()
        browser.pause(7000)
    }

    clickTopographicMap(){
        this.baseMap.click()
        this.topographic_baseMap.click()
        browser.pause(7000)
    }
    
    clickDarkGreyCanvasMap(){
        this.baseMap.click()
        this.darkGreyCanvas_baseMap.click()
        browser.pause(7000)
    }



   
       
     searchAddress(address){
        this.search.click()
        //this.searchBar.doubleClick()
        browser.pause(3000)
        this.searchBar.addValue(address)
        browser.pause(5000)
        this.searchButton_searchWindow.click()
        this.searchGridResult.click()
        this.searchWindowClose.click()        
    }

    clickOnIdentify(){
        this.identifyButton.click()
    }

    clickOnStreetViewBtn(){
        this.streetView.click()
        browser.pause(5000)

    }

    clickOnLocationForStreetView(){
        var logo = $('#UploadLead_label')
        browser.pause(9000)
        logo.click({ x: 227, y: 295})
        browser.pause(7000)

    }
    addressDisplayedStreetView(){

        var streetAddress = $('//*[@id="divAddressText"]/b').getText()
        //var cityAddress = $('//*[@id="divAddressText"]/font').getText()
        return streetAddress
    }

    featureLeadSearch_Zip(zipCode){
        this.search.click()
        browser.pause(5000)
        this.featureRadioBtn.click()
        //browser.pause(2000)
        //this.featureSearchDrpdown.click()
        //browser.pause(2000)
        //this.featureSearchDrpdown.addValue('Pa')
        //browser.pause(2000)
        //browser.keys('Enter')

        this.featureSearchFieldDrpdown.click()
        browser.pause(3000)
        this.featureSearchFieldDrpdown.addValue('Z')
        browser.pause(3000)
        this.featureSearchFieldDrpdown.click({ x: 340, y: 2})
        browser.pause(3000)
        
        this.searchBar.setValue(zipCode)
        this.searchButton_searchWindow.click()

        /*
        this.searchGridResult.click()
        this.searchWindowClose.click()                  
        
        var logo = $('#UGICreateLeadButton_label')
        logo.click({ x: 227, y: 295})
        browser.pause(7000)
        logo.click({ x: 500, y: 295})
        browser.pause(7000)
        logo.click({ x: 227, y: 500})
        browser.pause(7000)
        logo.click({ x: 227, y: 295})
        browser.pause(7000)
        logo.doubleClick({ x: 227, y: 295})
        */
    }

    checkFooterCount(){
        
        $('//*[@id="kendoSearchGrid"]/div[5]/span[2]').scrollIntoView();
        var string1 = $('//*[@id="kendoSearchGrid"]/div[5]/span[2]').getText()
        var temp = string1.split(" ")
        console.log(temp[4])
        return temp[4]
             
    }

    
    reverseGeoCodeSearch(){
        this.search.click()
        browser.pause(3000)
        this.reverseGeoCodeRadioBtn.click()
        browser.pause(2000)
       
    }

    clickOnMeasure(){

        this.measure.click()
        browser.pause(3000)
    }

    measureAreaDisplayed(){

        this.measureAreaBtn.click()
        var logo = $('#UGICreateLeadButton_label')
        logo.click({ x: 227, y: 295})
        browser.pause(7000)
        logo.click({ x: 500, y: 295})
        browser.pause(7000)
        logo.click({ x: 227, y: 500})
        browser.pause(7000)
        logo.click({ x: 227, y: 295})
        browser.pause(7000)
        return $('//*[@id="dijit_layout_ContentPane_6"]').getText()


    }

    measureDistanceDisplayed(){

        this.measureDistanceBtn.click()
        browser.pause(3000)
        var logo = $('#UGICreateLeadButton_label')
        logo.click({ x: 300, y: 500})
        browser.pause(7000)
        logo.click({ x: 700, y: 295})
        browser.pause(7000)
        return $('//*[@id="dijit_layout_ContentPane_6"]').getText()
        
    }

    measureLocationDisplayed(){

        this.measureLocationBtn.click()
        var logo = $('#UGICreateLeadButton_label')
        logo.click({ x: 227, y: 295})
        browser.pause(7000)
        logo.click({ x: 700, y: 295})
        browser.pause(7000)
        var longitude = $('//*[@id="dijit_layout_ContentPane_7"]/table/tbody/tr[3]/td[2]/span').getText()
        var latitude = $('//*[@id="dijit_layout_ContentPane_7"]/table/tbody/tr[3]/td[3]/span').getText()
        return [longitude, latitude]
        
    }

    clickOnParcel(){
        var projectLogo = $('//*[@id="id_UGIProj"]/a')
        projectLogo.click({ x: 50, y: 50})
        browser.pause(7000)
              

    }
}

module.exports = new ugiFieldBookPages()