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

    // Napisz konstruktor tworzacy obiekty studentow. Maja posiadac imie i nazwisko, wiek, i pusta tablice na oceny. Utworz trzy egzemplarze (student1, student2, student3)
    var Student = function (name, age) {
        this.name = name;
        this.age = age;
        this.marks = [];
    };
    // Dopisz prototyp dodajacy do tablicy oceny i zwracajacy je.
    Student.prototype = {
        addMark: function (mark) {
            if ("number" == typeof mark && 2 <= mark && 5 >= mark) {
                this.marks.push(mark);
            }
            else if ("[object Array]" == Object.prototype.toString.call(mark)) {
                for (var i = 0; i < mark.length; i++) {
                    if ("number" == typeof mark[i] && 2 <= mark[i] && 5 >= mark[i]) {
                        this.marks.push(mark[i]);
                    }
                }
            }

            return this.marks;
        },
        // Dopisz prototyp liczacy srednia ze wszystkich ocen z dokladnoscia dwoch miejsc po przecinku i zwracajaca ja
        average: function () {
            var sum = 0;
            for (var i = 0; i < this.marks.length; i++) {
                sum += this.marks[i];
            }
            return Math.round(sum / this.marks.length * 100) / 100;
        }
    };


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
        car2: new Car(500, 600), student1: new Student("Dawid Zegar", 23),
        student2: new Student("Jan Kowalski", 77),
        student3: new Student("Jacek Nowak", 34),

        // Napisz funkcje przyjmujaca jako argument tablice elementow typu Student. Funkcja wybiera studenta z najlepsza srednia i zwraca go.
        getBestStudent: function (students) {

            var iBest = 0;
            var best = students[iBest].average();

            for (var i = 0; i < students.length; i++) {
                if (isNaN(students[i].average())) {
                    return false;
                }
                if (best < students[i].average()) {
                    iBest = i;
                }
            }
            return students[iBest];
        }
    };
})();