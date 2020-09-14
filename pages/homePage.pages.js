class homePage{

    get username() { return $('#UserName') }
    get password() { return $('#Password') }
    get submitBtn() { return $('input[type="submit"]') }
    get sjgTestProjectCard() {return $('img[src="/Images/Fieldbook_Project cards(491).png"]' )}

    homePageSubmit(uname, passwd){

        this.username.setValue(uname)
        this.password.setValue(passwd)
        this.submitBtn.click()
    }

    clickSJGTest(){

        this.sjgTestProjectCard.click()
        
    }


}

module.exports = new homePage()