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
    parseScore () {
        return 'asdf';
    }
}

describe( "Parse Bowling Score", function () {

    it ("entire score is a string", function () {
      const sut = new ParseBowlingScore();
      const result = sut.parseScore();
      expect(typeof result).toBe('string')
    });

});
