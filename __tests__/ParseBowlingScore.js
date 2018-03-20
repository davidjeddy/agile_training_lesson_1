// Strikes = 'X' = strike = 10, convert to integer of 10
// Dash = '-' = Gutter = 0
// no delimiters
// String number {1-9} = integer 1 -> 9
// Spare = '/' = prev. number subtract 10.

// Given the string return an array of numbers:
// Exp: 9/------------------ response would be
/**
 * [
 *   9,
 *   1,
 *   0,
 *   0,
 *   0,
 *   ...
 * ]
 */

class ParseBowlingScore {

    constructor() {
        this.gameData = '{"date":"2017-01-01","rolls":"11111111111111111111"}';
    }

    convertGameStringToObject() {
        return JSON.parse(this.gameData);
    }

    parseScore () {
        return 'asdf';
    }
}

describe( "Parse Bowling Score", function () {
    const sut = new ParseBowlingScore();

    it ("entire score is a string", function () {
        const result = sut.parseScore();
        expect(typeof result).toBe('string')
    });

    it ("Convert string to Object", function () {
        const result = sut.convertGameStringToObject();
        expect(typeof result).toBe('object')
        expect(result.date).toEqual('2017-01-01')
    })
});
