const WebDriver = require( "webdriverio" )

const driver = WebDriver.remote( {
    browserName: "chrome",
    path: "/",
    port: 9515
} )

describe( "simple search", function () {

    beforeAll( function () {
        jest.setTimeout( 10000 )
    } )

    beforeEach( function () {
        return driver.init()
    } )

    afterEach( function () {
        return driver.end()
    } )

    it( "finds selenium on duckduckgo", function () {
        return driver.url( `http://duckduckgo.com/` )
            .setValue( "#search_form_input_homepage", "selenium" )
            .click( "#search_button_homepage" )
            .click( "a*=Web Browser Automation" )
            .waitForExist( "#mainContent", 3000 )
            .getTitle().then(
                title => expect( title ).toEqual( "Selenium - Web Browser Automation" ) )
    } )

} )
