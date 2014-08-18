/**
 * Created by ania on 8/18/14.
 */
describe('day2', function () {
    var answer = window.day2;

    describe('createArrayObject', function () {
        it('should return array object numeric', function () {
            expect(answer.createArrayObject(15, 1, 3)).toEqual({property1: 15, property2: 1, property3: 3});
        });
        it('should return array object string and numeric', function () {
            expect(answer.createArrayObject('asdas', 'asd', 3)).toEqual({property1: 'asdas', property2: 'asd', property3: 3});
        });

        it('should return array object string and numeric with undefined', function () {
            expect(answer.createArrayObject(undefined, 'asd', 3)).toEqual({property1: undefined, property2: 'asd', property3: 3});
        });

    });

    describe("testIsAnyReturnFunction", function () {
        it('should return true', function () {
            expect(answer.testIsAnyReturnFunction(true)).toBeTruthy();
            expect(answer.testIsAnyReturnFunction(true)).toEqual(true);

        });
        it('should return false or undefined', function () {
            expect(answer.testIsAnyReturnFunction(false)).toBe(undefined);
            expect(answer.testIsAnyReturnFunction(false)).toBeFalsy();
        });
    });

    describe("arrayFunction", function () {
        it('Should return depends of index even a square not even cube. ', function () {
            expect(answer.arrayFunction([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);

        });
    });

    describe("subString", function () {
        it('should return array string change string', function () {
            expect(answer.subString("kota", ['Ala', 'ma', 'kota'], 'psa')).toEqual(['Ala', 'ma', 'psa']);

        });
    });
    describe("addPropertiesToObjectCheckNumber", function () {
        it('should return change object input value number', function () {
            expect(answer.addPropertiesToObjectCheckNumber({properties1: 20, properties2: 30}, "properties3", 1234)).toEqual({properties1: 20, properties2: 30, properties3: 1234});

        });

        it("should return change object input string asd", function () {
            expect(answer.addPropertiesToObjectCheckNumber({properties1: 20, properties2: 30}, 'properties3', 'asd')).toEqual({properties1: 20, properties2: 30, properties3: 'asd'});

        });
    });

    describe('findTheBiggerBox', function () {
        it('should return 2 (#box)', function () {
            expect(answer.findTheBiggerBox(8, 6, 5)).toEqual(2);
        });
        it('should return 1 (#box)', function () {
            expect(answer.findTheBiggerBox(5, 1, 1)).toEqual(1);
        });
        it('should return false for string value (#box)', function () {
            expect(answer.findTheBiggerBox(9, "string1", 2)).toBeFalsy();
        });


    });
    describe('makePerson', function () {
        it('should return object Dawid Zegar', function () {
            expect(answer.makePerson("Dawid", "Zegar", 23)).toEqual({firstName: "Dawid", lastName: "Zegar", age: 23});
        });
        it('should return object Jan Kowalski', function () {
            expect(answer.makePerson("Jan", "Kowalski", 44)).toEqual({firstName: "Jan", lastName: "Kowalski", age: 44});
        });


    });
    describe('invertString', function () {

        it('should return 1tseT', function () {
            expect(answer.invertString("Test1")).toEqual("1tseT");
        });
        it('should return false', function () {
            expect(answer.invertString(234)).toBeFalsy();
        });


    });
    describe('factorial', function () {

        it('should return [1, 1]', function () {
            expect(answer.factorial(1)).toEqual([1, 1]);
        });
        it('should return 6 element = 720', function () {
            expect(answer.factorial(7)[6]).toEqual(720);
        });

    });
    describe('sumObject', function () {

        it('should return 38', function () {
            expect(answer.sumObject({param0: 2, param1: 5, param2: 9, param3: 2, param4: 20})).toEqual(38);
        });


    });


});
