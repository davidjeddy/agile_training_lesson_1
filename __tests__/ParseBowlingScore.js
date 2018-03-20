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

// function for adding two numbers. Easy!
const add = (a, b) => a + b;

class ParseBowlingScore {

    constructor() {
        this.gameData = JSON.parse('{"date":"2017-01-01","rolls":"11111111111111111111"}');
        this.gameData.rolls = this.gameData.rolls.split('');
        // this.replaceXWith10();
        // this.replaceTackWith0();
        // this.replaceFwdSlashWithIntegerValue();
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

    replaceFwdSlashWithIntegerValue () {
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

    getStandardScore(scoreArray) {
        return scoreArray.reduce(add)
    }

    getSpareScore(rollArray) {
        var spareroll = [];

        for (var i = 0; i < rollArray.length; i+=2) {
            if (rollArray[i] === 10) { continue }

            if (rollArray[i] + rollArray[i+1] === 10) {
                var spareValue = (10 + rollArray[i+2]);
                spareroll.push(spareValue);
            }
        }

        return spareroll;
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
        const result = sut.replaceFwdSlashWithIntegerValue();
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

    it ("Score is all zeros", function () {
        const score = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        const result = sut.getStandardScore(score);

        expect(result).toEqual(0);
    })

    it ("Standard score, no bonuses", function() {
        const score = [0,8,6,3,5,3,5,3,2,6,0,7,0,3,3,4,7,2,1,2];

        const result = sut.getStandardScore(score);

        expect(result).toEqual(70);
    });

    it ("Calculate score, with spares", function() {
        const score = [2,8,6,3,5,3,5,3,2,6,3,7,0,3,3,4,7,2,1,2];

        const result = sut.getSpareScore(score);

        expect(result).toEqual([16, 10]);
    });
});
