const sinon = require('sinon');

// valid code is 4 character alpha-numeric, uppercase letters only
class GetBowlingScore {

    /**
     *
     * @param code {string}
     * @returns {string}
     */
    requestFromBowlingDataService(code)
    {
        if (code === "12AB") {
            return {"date":"2017-01-02","rolls":"238143XX5/--189/XXX"};
        }
    }
}

describe("GETing bowling game code and score...", function () {
    // mock a network request, class currently fakes the response
    it ( "payload for code matches expected value", function() {
        var GBS = new GetBowlingScore();

        var expectation = sinon
            .mock( GBS )
            .expects("requestFromBowlingDataService")
            .withArgs("12AB");

        const response = GBS.requestFromBowlingDataService("12AB");

        expectation.verify();
    });

    it ( "payload is valid", function() {
        var GBS = new GetBowlingScore();

        var expectation = sinon
            .mock( GBS )
            .expects( "requestFromBowlingDataService" )
            .withArgs( "12AB" );

        const response = GBS.requestFromBowlingDataService("12AB");
    });

    it ( "payload contained date and rolls", function() {
        var GBS = new GetBowlingScore();

        const response = GBS.requestFromBowlingDataService("12AB");

        const keys = Object.keys(response);

        expect(keys).toEqual(['date','rolls']);
    });

    it ( "date is valid", function() {
        var GBS = new GetBowlingScore();

        const response = GBS.requestFromBowlingDataService("12AB");

        expect(response.date).toMatch(new RegExp(/^\d{4}\-\d{1,2}\-\d{1,2}$/));
    });

    it ( "rolls is valid", function() {
        var GBS = new GetBowlingScore();

        const response = GBS.requestFromBowlingDataService("12AB");

        expect(response.rolls).toMatch(new RegExp(/[\dX\-\/]/));
    });

    // it ( "score is valid ", function() {
    //     var GBS = new GetBowlingScore();
    //
    //     const response = GBS.requestFromBowlingDataService("12AB");
    //
    //     expect(response.score).toMatch(new RegExp(/[\d]/));
    // });
});

