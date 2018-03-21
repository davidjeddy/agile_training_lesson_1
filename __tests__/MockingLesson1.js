const sinon = require('sinon');

class EmailService {
    sendEmail(content) {
        return content
    }
}

class Greeting1 {
    constructor( es ) {
        this.es = es;
    }

    sayHello (name) {
        return this.es.sendEmail("Whazzup, "+name+"!");
    }
}

describe("Mocking Lesson 1", function() {
    it( "...should send an email message.", function() {
        var es = new EmailService();

        var expectation = sinon
            .mock( es )
            .expects( "sendEmail" )
            .withArgs( "Whazzup, Joe!" );

        var g = new Greeting1( es );

        g.sayHello( "Joe" );

        expectation.verify();
    } );
});
