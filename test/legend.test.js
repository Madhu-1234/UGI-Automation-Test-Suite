const homePagePages = require("../pages/homePage.pages")
const ugiFieldbookPages = require("../pages/ugiFieldbook.pages")
const legendPages = require("../pages/legend.pages")
const { assert, expect } = require("chai")


describe("Verifying legend components", function(){

    it("Should verify legend layer Work Order Points", ()=>{

        ugiFieldbookPages.zoomToEnableLegend()
        ugiFieldbookPages.clickLegend()
        legendPages.mapLayers.waitForDisplayed()
        
        /*
        ***Validating different layers are displayed in the legend pane
        */
        assert.equal(true, legendPages.mapLayers.isDisplayed())
        assert.equal(true, legendPages.allLeads.isDisplayed())
        assert.equal(true, legendPages.otherValues_allLeads.isDisplayed())
        assert.equal(true, legendPages.new_allLeads.isDisplayed())
        assert.equal(true, legendPages.escalated_allLeads.isDisplayed())
        assert.equal(true, legendPages.inquiry_allLeads.isDisplayed())
        assert.equal(true, legendPages.appointmentMade_allLeads.isDisplayed())
        assert.equal(true, legendPages.quoteNeeded_allLeads.isDisplayed())
        assert.equal(true, legendPages.quoteReady_allLeads.isDisplayed())
        assert.equal(true, legendPages.quoteProvided_allLeads.isDisplayed())
        assert.equal(true, legendPages.considering_allLeads.isDisplayed())
        assert.equal(true, legendPages.won_allLeads.isDisplayed())
        assert.equal(true, legendPages.wonAwaitingPayment_allLeads.isDisplayed())
        assert.equal(true, legendPages.lost_allLeads.isDisplayed())
        assert.equal(true, legendPages.ciacChargeReversed_allLeads.isDisplayed())


        assert.equal(true, legendPages.main.isDisplayed())
        assert.equal(true, legendPages.allOtherValues_main.isDisplayed())
        assert.equal(true, legendPages.lowExisting_main.isDisplayed())
        assert.equal(true, legendPages.lowExistingGG_main.isDisplayed())
        assert.equal(true, legendPages.lowProposed_main.isDisplayed())
        assert.equal(true, legendPages.lowProposedGG_main.isDisplayed())
        assert.equal(true, legendPages.mediumExisting_main.isDisplayed())
        assert.equal(true, legendPages.mediumExistingGG_main.isDisplayed())
        assert.equal(true, legendPages.mediumProposed_main.isDisplayed())
        assert.equal(true, legendPages.mediumProposedGG_main.isDisplayed())
        assert.equal(true, legendPages.highExisting_main.isDisplayed())
        assert.equal(true, legendPages.highExistingGG_main.isDisplayed())
        assert.equal(true, legendPages.highProposed_main.isDisplayed())
        assert.equal(true, legendPages.highProposedGG_main.isDisplayed())

        assert.equal(true, legendPages.stateRoads.isDisplayed())

        assert.equal(true, legendPages.parcels.isDisplayed())
        assert.equal(true, legendPages.installationCompletelyDisconnected_parcels.isDisplayed())
        assert.equal(true, legendPages.disconnectionStarted_parcels.isDisplayed())
        assert.equal(true, legendPages.installationCompletelyDisconnected_parcels.isDisplayed())
        assert.equal(true, legendPages.installationPartiallyDisconnected_parcels.isDisplayed())
        assert.equal(true, legendPages.reconnectionStarted_parcels.isDisplayed())
        assert.equal(true, legendPages.devicesRemoved_parcels.isDisplayed())
        assert.equal(true, legendPages.devicesRemovedAndDisconnected_parcels.isDisplayed())
        assert.equal(true, legendPages.nonCustomer_parcels.isDisplayed())

        assert.equal(true, legendPages.project.isDisplayed())
        assert.equal(true, legendPages.allOtherValues_project.isDisplayed())
        assert.equal(true, legendPages.getGas_project.isDisplayed())
        assert.equal(true, legendPages.disqualifiedGET_project.isDisplayed())
        assert.equal(true, legendPages.proposedGET_project.isDisplayed())
        assert.equal(true, legendPages.newConstruction_project.isDisplayed())
        assert.equal(true, legendPages.apartmentComplex_project.isDisplayed())

        assert.equal(true, legendPages.paZipCode.isDisplayed())
        assert.equal(true, legendPages.operatingAreas.isDisplayed())
        assert.equal(true, legendPages.municipalities.isDisplayed())      

        

      
    })

})
