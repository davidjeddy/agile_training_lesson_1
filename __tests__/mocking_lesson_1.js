const sinon = require('sinon');

class DataService {
    getMessageBasedOnAge(age) {
    }
}

class Greeting1 {
    constructor( ds ) {
        this.ds = ds;
    }

    build (name, age) {
        return "Yo, Joe!"
    }
}

describe("Mocking Lesson 1", function() {
    it( "should build a greeting based on age", function() {
        var ds = new DataService();

        sinon.stub( ds, "getMessageBasedOnAge" )
            .withArgs( 20 )
            .returns( "Yo" );

        var g = new Greeting1( ds );

        var message = g.build( "Joe", 20 );

        expect(message).toEqual("Yo, Joe!");
    } );
});
