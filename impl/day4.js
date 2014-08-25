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
//            Napisz funckje toString która będzie wypisywac zawartosc pudelka w postaci stringu ma być ona dodana do prototypy.
            if (0 == this.inBoxes.length) {
                return 'This boxes is empty';
            } else {
                var inBoxesList = '';
                for (var i = 0; i < this.inBoxes.length; i++) {
                    inBoxesList = inBoxesList + this.inBoxes[i] + ',';
                }
                return 'Inside this boxes is: ' + inBoxesList;
            }
        },

//        Napisz funckje liczaca powierzchnie pudełka
        squareBoxes: function () {
            return this.lenght * this.width;
        },

//        Napisz funkcje która będzie dodawać do pudełek zawarość
        addBoxes: function (propertiesIn) {
            if ('string' === typeof propertiesIn) {
                this.inBoxes.push(propertiesIn);
            } else {
                for (var i = 0; i < propertiesIn.length; i++) {
                    this.inBoxes.push(propertiesIn[i]);
                }
            }
        },

//        Napisz funkcje która bęðzie sprawdzać czy dane pudełko może zostać przewiezione przez auto jako parametr przyjmuje obiekt samochod
        transportBoxes: function (car) {
            if ((car.maxSquareTransport >= this.squareBoxes()) && (car.maxWeightTransport >= this.weight)) {

                return 'This car can transport this boxes';
            } else {
                return "This car can't transport this boxes";
            }

        },
//        Napisz funkcje która będzie opróźniać pudełko
        emptyBoxes: function () {
            this.inBoxes = [];
        }

    };


    window.day4 = {
        box1: new Boxes(10, 10, 10),
        box2: new Boxes(15, 30, 40),
        box3: new Boxes(200, 45, 10),
        box4: new Boxes(20, 5, 10),
        box5: new Boxes(2, 45, 10),
        box6: new Boxes(250, 4, 10),

        car1: new Car(90, 100),
        car2: new Car(500, 600),
        car3: new Car(5, 600),
        car4: new Car(50, 600),
        car5: new Car(10, 6),
        car6: new Car(50, 20)
    };
})();