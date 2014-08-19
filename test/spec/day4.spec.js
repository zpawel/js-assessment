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

});