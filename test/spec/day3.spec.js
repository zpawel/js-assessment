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

    describe('book.delProperty', function () {
        it('should return book without numPages', function () {
            expect(answer.book.delProperty("numPages")).toEqual({title: "Kot w butach", author: "Jan Kowalski", comments: "Good book!", delProperty: jasmine.any(Function)});
        });
        it('should answer undefined for request numPages', function () {
            expect(answer.book.delProperty("numPages").numPages).toEqual(undefined);
        });


    });


    describe('propertyNames', function () {
        it('should array of property names and values', function () {
            expect(answer.propertyNames({name: "Jan", age: 34})).toEqual([
                ["name", "Jan"],
                ["age", 34]
            ]);
        });
        xit('should array of indeks and values', function () {
            expect(answer.propertyNames(["raz", "dwa"])).toEqual([
                ["0", "raz"],
                ["1", "dwa"]
            ]);
        });


    });
    describe('mergeObject', function () {
        it('should return one object cointins all atributes', function () {
            expect(answer.mergeObject({name: "Jan", age: 34}, {title: "Kot w butach", comments: "Good book!"})).toEqual({ name: 'Jan', age: 34, title: 'Kot w butach', comments: 'Good book!' });
        });
        it("should return false if any arguement are string", function () {
            expect(answer.mergeObject({name: "Jan", age: 34}, "ala")).toBeFalsy();
        });
        it("should return false if any arguement are boolean", function () {
            expect(answer.mergeObject(true, {title: "Kot w butach", comments: "Good book!"})).toBeFalsy();
        });


    });
    describe('countVowes', function () {
        it("should return 4", function () {
            expect("String Testowy".countVowels()).toEqual(4);
        });
        it("should return 0 for empty string", function () {
            expect("".countVowels()).toEqual(0);
        });

    });
    describe('arrayToString', function () {
        it("should return 'raz dwa trzy'", function () {
            expect(["raz", "dwa", "trzy"].arrayToString()).toEqual("raz dwa trzy");
        });
        it("should return 'raz 2 trzy 4'", function () {
            expect(["raz", 2, "trzy", 4].arrayToString()).toEqual("raz 2 trzy 4");
        });
        it("should return 'false 0 1 2'", function () {
            expect([false, 0, 1, 2].arrayToString()).toEqual("false 0 1 2");
        });


    });
});