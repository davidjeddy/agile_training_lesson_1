class FizzBuzz {
    calculateResponse (number) {
        var string = '';
        if (number % 3 == 0) { string += "fizz"; }
        if (number % 5 == 0) { string += "buzz"; }
        return string;
    }
}

describe( "FizzBuzz Testing", function () {
    it ( "div by 3 returns fizz", function() {
        const sut = new FizzBuzz();
        const result = sut.calculateResponse(3);
        expect(result).toEqual("fizz");
    })

    it ( "div by 5 returns fizz", function() {
        const sut = new FizzBuzz();
        const result = sut.calculateResponse(5);
        expect(result).toEqual("buzz");
    })

    it ( "div by 3 and 5 returns fizz", function() {
        const sut = new FizzBuzz();
        const result = sut.calculateResponse(15);
        expect(result).toEqual("fizzbuzz");
    })
});


