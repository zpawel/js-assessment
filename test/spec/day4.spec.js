/**
 * Created by kronos on 19.08.14.
 */
describe('day4', function () {
    var answer = window.day4;

    describe('Boxes toString()', function () {
        beforeEach(function () {
            answer.box1.addBoxes(['cat', 'lion'], [2, 3]);
            answer.box2.addBoxes([]);
            answer.box3.addBoxes('4');


        });

        it('Should return string what is inside the boxes', function () {
            expect(answer.box1.toStringBoxes()).toEqual('Inside this boxes is: cat,lion,');
            expect(answer.box2.toStringBoxes()).toEqual('This boxes is empty');
            expect(answer.box3.toStringBoxes()).toEqual('Inside this boxes is: 4,');
        });


        afterEach(function () {
            answer.box1.emptyBoxes();
            answer.box2.emptyBoxes();
            answer.box3.emptyBoxes();
        });
    });
    describe('transportBoxes', function () {
        it('Should return we can transport this box1', function () {
            expect(answer.box1.transportBoxes(answer.car1)).toEqual("This car can transport this boxes");
            expect(answer.box1.transportBoxes(answer.car2)).toEqual("This car can transport this boxes");
        });

        it('Should return we can transport this box2', function () {
            expect(answer.box2.transportBoxes(answer.car1)).toEqual("This car can't transport this boxes");
            expect(answer.box2.transportBoxes(answer.car2)).toEqual("This car can transport this boxes");
        });

        it('Should return we can transport this box3', function () {
            expect(answer.box3.transportBoxes(answer.car1)).toEqual("This car can't transport this boxes");
            expect(answer.box3.transportBoxes(answer.car2)).toEqual("This car can't transport this boxes");
        });
    });
    describe('checkExistObject', function () {
        it("Check the user create object box<numbers>", function () {
            expect(answer.box1).not.toBeUndefined()
            expect(answer.box2).not.toBeUndefined()
            expect(answer.box3).not.toBeUndefined()
        });

        it("Check the user create object car<numbers>", function () {
            expect(answer.car1).not.toBeUndefined()
            expect(answer.car2).not.toBeUndefined()
        });
    });

    describe('Student objectst', function () {

        it('should student 1 to 3 be defined', function () {
            expect(answer.student1).not.toBeUndefined();
            expect(answer.student2).not.toBeUndefined();
            expect(answer.student3.marks).not.toBeUndefined();
        });
    });

    describe('Student.addMark', function () {

        beforeEach(function () {
            answer.student1.addMark(3);
            answer.student1.addMark(5);
        });
        it('should return [3, 5]', function () {
            expect(answer.student1.marks).toEqual([3, 5]);
        });

        it('should add element 2, 4, 3 and return correct array', function () {
            expect(answer.student1.addMark(2)).toEqual([3, 5, 2]);
            expect(answer.student1.addMark(4)).toEqual([ 3, 5, 2, 4 ]);
            expect(answer.student1.addMark(3)).toEqual([ 3, 5, 2, 4, 3 ]);
        });
        it("shouldn't add element different than number between 2 and 5", function () {
            expect(answer.student1.addMark(true)).toEqual([3, 5]);
            expect(answer.student1.addMark(["raz", "dwa"])).toEqual([3, 5]);
            expect(answer.student1.addMark("Napis")).toEqual([3, 5]);
            expect(answer.student1.addMark({name: "John", age: 55})).toEqual([3, 5]);

        });
        it("shouldn't add number elements from array", function () {
            expect(answer.student1.addMark([3, 4, 3])).toEqual([3, 5, 3, 4, 3]);
            expect(answer.student1.addMark([4, 2, 9, 9, 2, 2])).toEqual([3, 5, 3, 4, 3, 4, 2, 2, 2]);

        });

        afterEach(function () {
            answer.student1.marks = [];
        })


    });
    describe('Student.average', function () {
        beforeEach(function () {
            answer.student1.addMark(2);
            answer.student1.addMark(5);
            answer.student1.addMark(3);
        });
        it('should return average from marks in array', function () {
            expect(answer.student1.average()).toEqual(3.33);
            answer.student1.addMark(5);
            expect(answer.student1.average()).toEqual(3.75);
            answer.student1.addMark([2, 3, 2]);
            expect(answer.student1.average()).toEqual(3.14);
        });
        it('should return NaN if in array ara bad types', function () {
            answer.student1.marks = [3, "string", 4, 4];
            expect(answer.student1.average()).toBeFalsy()
            answer.student1.marks = [
                {mark1: 3, mark2: 5},
                4
            ];
            expect(answer.student1.average()).toBeFalsy()
        });
        afterEach(function () {
            answer.student1.marks = [];
        })
    });
    describe('getBestStudent', function () {
        var students;
        beforeEach(function () {
            answer.student1.addMark([2, 3, 5, 3, 4]);
            answer.student2.addMark([5, 4, 5, 3]);
            answer.student3.addMark([3, 2]);
            students = [answer.student1, answer.student2, answer.student3];
        });
        it('should return student with best marks average', function () {
            expect(answer.getBestStudent(students)).toBe(answer.student2);
            answer.student2.addMark([2, 2, 2, 2]);
            expect(answer.getBestStudent(students)).toBe(answer.student1);
            answer.student3.addMark([5, 5, 5, 5, 5]);
            expect(answer.getBestStudent(students)).toBe(answer.student3);
        });
        it('should return false if in array are types different than Student', function () {
            answer.student2.marks.push("string");
            expect(answer.getBestStudent(students)).toBeFalsy();
            expect(answer.getBestStudent([answer.student1, answer.student2])).toBeFalsy();
            expect(answer.getBestStudent([answer.student2, answer.student3])).toBeFalsy();
            expect(answer.getBestStudent([answer.student1, answer.student3])).not.toBeFalsy();
        });

        afterEach(function () {
            answer.student1.marks = [];
            answer.student2.marks = [];
            answer.student3.marks = [];
        })
    });
});