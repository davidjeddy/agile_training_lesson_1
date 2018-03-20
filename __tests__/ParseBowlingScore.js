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
        this.gameData = JSON.parse('{"date":"2017-01-01","rolls":"11111111111111111111"}');
        this.gameData.rolls = this.gameData.rolls.split('');
        // this.replaceXWith10();
        // this.replaceTackWith0();
        // this.replaceFwdSlashWithSpareValue();
        // this.replaceIntegerWithString();
    }

    replaceXWith10 () {
        return this.gameData.rolls.map(function(roll) {
            if (roll === 'X') {
                return 10;
            }
        })
    }

    replaceTackWith0 () {
        return this.gameData.rolls.map(function(roll) {
            if (roll === '-') {
                return 0;
            }
        })
    }

    replaceFwdSlashWithSpareValue () {
        return this.gameData.rolls.map(function(roll, i, rollArray) {
            if (roll === '/') {
                returnValue (rollArray[i--] - 10);
                return returnValue;
            }
        })
    }

    replaceStringWithInteger () {
        return this.gameData.rolls.map(function(roll) {
            return Number(roll);
        })
    }
}

describe( "Parse Bowling Score", function () {
    const sut = new ParseBowlingScore();

    it ( "Replace X with 10", function() {
        const result = sut.replaceXWith10();
        expect(result.indexOf('') >= 0).toBe(false)
    })

    it ( "Replace task with 0", function() {
        const result = sut.replaceTackWith0();
        expect(result.indexOf('-') >= 0).toBe(false)
    })

    it ( "Replace / with integer", function() {
        const result = sut.replaceFwdSlashWithSpareValue();
        expect(result.indexOf('/') >= 0).toBe(false)
    })

    it ( "Replace String with Integer", function() {
        const result = sut.replaceStringWithInteger();
        expect(result.filter(function(value) {
            if (value instanceof String) {
                return true;
            }
        }).length > 0).toBe(false)
    })
});
