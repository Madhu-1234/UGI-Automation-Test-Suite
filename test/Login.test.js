const homePagePages = require("../pages/homePage.pages")
describe("Validate UGI project card selected" , function(){

    it("Login to testfieldbook", ()=>{
       
        
        console.log(browser.getTitle)
        expect(browser.getTitle()).equals('UGI_FB4-TST')
        //comparing login screenshot with base screenshots
        browser.saveFullPageScreen('fullPage');
        expect(browser.checkFullPageScreen('fullPage')).to.equal(0);
        console.log('Passed')
    
            

    })



})


