(function () {
    'use strict';

    // Your implementations here
    Boxes.prototype = {
        addBoxes: function(content){
            if(typeof content === 'string'){
                this.inBoxes.push(content);
            }else{
                this.inBoxes = this.inBoxes.concat(content);
            }
        }
    };

    function Boxes(length, width, weight) {
        this.length = length;
        this.width = width;
        this.weight = weight;
        this.inBoxes = [];
        this.toStringBoxes = function () {
            if (this.inBoxes.length > 0) {
                return 'Inside this boxes is: ' + this.inBoxes.join() + ',';
            }
            else {
                return 'This box is empty';
            }
        };
        this.emptyBoxes = function () {
            this.inBoxes = '';
        };
        this.squareBoxes = function () {
            return this.width * this.length;
        };
        this.transportBoxes = function (car) {
            if (Car.maxSquareTransport >= this.squareBoxes && Car.maxWeightTransport >= this.weight) {
                return "This car can transport this boxes";
            } else {
                return "This car can't transport this boxes";
            }
        };
    }



    function Car(maxWeightTransport, maxSquareTransport){
        this.maxWeightTransport = maxWeightTransport;
        this.maxSquareTransport = maxSquareTransport;
    }

    window.day4 = {
        mbox1: new Boxes(10, 10, 10),
        mbox2: new Boxes(15, 30, 40),
        mbox3: new Boxes(200, 45, 10),
        mbox4: new Boxes(20, 5, 10),
        mbox5: new Boxes(2, 45, 10),
        mbox6: new Boxes(250, 4, 10),

        car1: new Car(90, 100),
        car2: new Car(500, 600),
        car3: new Car(5, 600),
        car4: new Car(50, 600),
        car5: new Car(10, 6),
        car6: new Car(50, 20),

        //student1: new Student("Dawid Zegar", 23),
        //student2: new Student("Jan Kowalski", 77),
        //student3: new Student("Jacek Nowak", 34)

        // Place getBestStudent here


    };
})();