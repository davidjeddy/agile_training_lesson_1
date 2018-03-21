const WebDriver = require( "webdriverio" )

const driver = WebDriver.remote( {
    browserName: "chrome",
    path: "/",
    port: 9515
} )

describe( "Visit bowlingscore.info", function () {

    const url = "http://bowlingscore.info/";

    beforeAll( function () {
        jest.setTimeout( 10000 )
    } )

    beforeEach( function () {
        return driver.init()
    } )

    afterEach( function () {
        return driver.end()
    } )

    it( "visit bowlingscore.info using selenium + ChromeDriver + BrowserDriver.io", function () {
        return driver.url( url )
            .saveScreenshot('./tests/screenshots/1-0.png')
            .click( "#button" )
            .saveScreenshot('./tests/screenshots/1-1.png')
            .getTitle().then(
                title => expect( title ).toEqual( "Bowling Score Info" ) )

    })
});
