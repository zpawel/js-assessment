/**
 * Created by kronos on 18.08.14.
 */
describe('day3', function () {
    var answer = window.day3;

    describe('countPropertiesInObject', function () {
        it('Should return count properties in object', function () {
                expect(answer.countPropertiesInObject(answer.aqurium, 'fish')).toEqual(2);
            }
        );
        it('Should return count properties in object', function () {
            expect(answer.countPropertiesInObject(answer.aqurium, 'tree')).toEqual(2);
        });
    });
    describe('writeAllPropertiesObject', function () {
        it("Should return all name properties in object", function () {
            expect(answer.writeAllPropertiesObject(answer.aqurium)).toEqual(['fish1', 'fish2', 'aqurine', 'underwaterTree1', 'underwaterTree2', 'stone']);
        });
    });

    describe("countCharInProperties", function () {
        it('Should return value exist a letter in name properties', function () {
            expect(answer.countCharInProperties(answer.aqurium, 'a')).toEqual(3);
        });
        it('Should return value exist a letter in name properties', function () {
            expect(answer.countCharInProperties(answer.aqurium, 'e')).toEqual(10);
        });
    });

    describe("Number.prototype.addNumber", function () {
        it('Should return added two numbers', function () {
            var temp = 123;
            expect(temp.addNumber(5)).toEqual(128);
        });
    });

    describe("Number.prototype.maxValueFromTwoArguments", function () {
        it('Should return max value from two arguments', function () {
            var temp = 123;
            expect(temp.maxValueFromTwoArguments(1, 200)).toEqual(200);
        });
    });

});