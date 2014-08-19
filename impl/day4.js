/**
 * Created by kronos on 19.08.14.
 */
(function () {
    'use strict';
    //Kontruktor obiektów pudełka utworz 3 obiekty o nazwach box<number>
    function Boxes(length, width, weight) {
        this.lenght = length;
        this.width = width;
        this.weight = weight;
        this.inBoxes = [];


    }

    //Konstruktor obiektór car utwórz 2 obiekt o nazwach car<number>
    function Car(maxWeightTransport, maxSquareTransport) {
        this.maxWeightTransport = maxWeightTransport;
        this.maxSquareTransport = maxSquareTransport;
    }


    //Funckje dziedziczone do każdego pudełka
    Boxes.prototype = {
        toStringBoxes: function () {
            if ('string' == typeof this.inBoxes || 'number' == typeof this.inBoxes) {

                return 'Inside this boxes is: ' + this.inBoxes;
            } else if (0 == this.inBoxes.length) {
                return 'This boxes is empty';
            } else {
                var inBoxesList = '';
                for (var i = 0; i < this.inBoxes.length; i++) {
                    inBoxesList = inBoxesList + this.inBoxes[i] + ',';
                }
                return 'Inside this boxes is: ' + inBoxesList;
            }
        },

        //Napisz funckje liczaca powierzchnie pudełka
        squareBoxes: function () {
            return this.lenght * this.width;
        },

        //Napisz funkcje która będzie dodawać do pudełek zawarość
        addBoxes: function (propertiesIn, weightProperties) {
            if ('string' === typeof propertiesIn) {
                this.inBoxes.push(propertiesIn);
            } else {
                for (var i = 0; i < propertiesIn.length; i++) {
                    this.inBoxes.push(propertiesIn[i]);
                }
            }
        },

        //Napisz funkcje która bęðzie sprawdzać czy dane pudełko może zostać przewiezione przez auto jako parametr przyjmuje obiekt samochod
        transportBoxes: function (car) {
            if ((car.maxSquareTransport >= this.squareBoxes()) && (car.maxWeightTransport >= this.weight)) {

                return 'This car can transport this boxes';
            } else {
                return "This car can't transport this boxes";
            }

        },
        emptyBoxes: function () {
            this.inBoxes = [];
        }

    };


    window.day4 = {
        box1: new Boxes(10, 10, 10),
        box2: new Boxes(15, 30, 40),
        box3: new Boxes(200, 45, 10),

        car1: new Car(90, 100),
        car2: new Car(500, 600)
    };
})();