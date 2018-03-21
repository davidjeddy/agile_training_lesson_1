class GreetingBuilder {
    build ( name = "World" ) {
        return "Hello, " + name + "!";
    }
}

describe( "Greeting Builder", function () {
    it ( "return a default message", function () {
        const sut = new GreetingBuilder();
        const result = sut.build();
        expect( result ).toEqual( "Hello, World!" )
    })
});
