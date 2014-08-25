describe('day4', function () {
    var answer = window.day4;
    describe('day4', function () {
        var answer = window.day4;
        describe('Boxes toString()', function () {
            beforeEach(function () {
                answer.box1.addBoxes(['cat', 'lion']);
                answer.box1.addBoxes(['cat2', 'lion2']);
                answer.box1.addBoxes(['dog', 'lion3']);

                answer.box2.addBoxes([]);
                answer.box3.addBoxes('4');
                answer.box4.addBoxes('dog');
                answer.box5.addBoxes(['dog', 'lion', 'tiger']);
                answer.box6.addBoxes('tiger');


            });

            it('Should return string what is inside the boxes', function () {
                expect(answer.box1.toStringBoxes()).toEqual('Inside this boxes is: cat,lion,cat2,lion2,dog,lion3,');
                expect(answer.box2.toStringBoxes()).toEqual('This boxes is empty');
                expect(answer.box3.toStringBoxes()).toEqual('Inside this boxes is: 4,');
                expect(answer.box4.toStringBoxes()).toEqual('Inside this boxes is: dog,');
                expect(answer.box5.toStringBoxes()).toEqual('Inside this boxes is: dog,lion,tiger,');
                expect(answer.box6.toStringBoxes()).toEqual('Inside this boxes is: tiger,');
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
                expect(answer.box1.transportBoxes(answer.car3)).toEqual("This car can't transport this boxes");
                expect(answer.box1.transportBoxes(answer.car4)).toEqual("This car can transport this boxes");
                expect(answer.box1.transportBoxes(answer.car5)).toEqual("This car can't transport this boxes");
                expect(answer.box1.transportBoxes(answer.car6)).toEqual("This car can't transport this boxes");
            });

            it('Should return we can transport this box2', function () {
                expect(answer.box2.transportBoxes(answer.car1)).toEqual("This car can't transport this boxes");
                expect(answer.box2.transportBoxes(answer.car2)).toEqual("This car can transport this boxes");
                expect(answer.box2.transportBoxes(answer.car3)).toEqual("This car can't transport this boxes");
                expect(answer.box2.transportBoxes(answer.car4)).toEqual("This car can transport this boxes");
                expect(answer.box2.transportBoxes(answer.car5)).toEqual("This car can't transport this boxes");
                expect(answer.box2.transportBoxes(answer.car6)).toEqual("This car can't transport this boxes");
            });

            it('Should return we can transport this box3', function () {
                expect(answer.box3.transportBoxes(answer.car1)).toEqual("This car can't transport this boxes");
                expect(answer.box3.transportBoxes(answer.car2)).toEqual("This car can't transport this boxes");
                expect(answer.box3.transportBoxes(answer.car3)).toEqual("This car can't transport this boxes");
                expect(answer.box3.transportBoxes(answer.car4)).toEqual("This car can't transport this boxes");
                expect(answer.box3.transportBoxes(answer.car5)).toEqual("This car can't transport this boxes");
                expect(answer.box3.transportBoxes(answer.car6)).toEqual("This car can't transport this boxes");
            });
        });
        describe('checkExistObject', function () {
            it("Check the user create object box<numbers>", function () {
                expect(answer.box1).not.toBeUndefined()
                expect(answer.box2).not.toBeUndefined()
                expect(answer.box4).not.toBeUndefined()
                expect(answer.box5).not.toBeUndefined()
                expect(answer.box6).not.toBeUndefined()
            });

            it("Check the user create object car<numbers>", function () {
                expect(answer.car1).not.toBeUndefined()
                expect(answer.car2).not.toBeUndefined()
                expect(answer.car3).not.toBeUndefined()
                expect(answer.car4).not.toBeUndefined()
                expect(answer.car5).not.toBeUndefined()
                expect(answer.car6).not.toBeUndefined()
            });
        });
    });
});
