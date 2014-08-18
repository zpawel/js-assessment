/**
 * Created by kronos on 14.08.14.
 */
(function () {
    'use strict';

    window.day2 = {
        //Napisz funckje przyjmująca 3 parametry która z tych parametrów będzie tworzyć obiekt.

        createArrayObject: function (obj1, obj2, obj3) {
            var obj = {property1: obj1, property2: obj2, property3: obj3};

            return obj;
        },


        //Napisz funkcje która będzie sprawdzać co jest zwracane z kiedy się wartość zwracana jest true a kiedy return jest pusty.

        testIsAnyReturnFunction: function (condition) {
            if (condition) {
                return true;
            } else {
                return;
            }
        },

        //Napisz funkcje która będzie wykorzystywać tablce funcji o podanych zależnościach stworzy tablicę.

        arrayFunction: function (array) {
            var multiply = [function (a) {
                return a * a
            }, function (a) {
                return a * a * a
            }];
            for (var i = 0; i < array.length; i++) {
                if (i % 2 == 0) {
                    array[i] = multiply[0](array[i]);
                }
                else {
                    array[i] = multiply[0](array[i]);
                }
            }
            return array;
        },

        //Napisz funkcje która będzie wyszukiwać zadany string i bęðzie go zamieniać na inny.

        subString: function (searchString, list, changeString) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] == searchString) {
                    list[i] = changeString;
                }
            }
            return list;
        },

        //Napisz funkcje która będzie dodawać właściwość do obiektu przyjmuje parametry obiekt, nazwę własności i wartość.

        addPropertiesToObjectCheckNumber: function (object, nameProperties, value) {
            object[nameProperties] = value;
            return object;


        },
        // Stworz funkcje wybierajaca pudelko (obiekty) o najwiekszej pojemnosci wedlug nastepujacych regul.
        findTheBiggerBox: function (x, y, z) {
            if (typeof x != "number" || typeof y != "number" || typeof z != "number" || x < 0 || y < 0 || z < 0) {
                return false;
            }
            var boxX = {
                sizeX: 3 * x,
                sizeY: y,
                sizeZ: z
            };
            var boxY = {
                sizeX: x,
                sizeY: y * y,
                sizeZ: z
            };
            var boxZ = {
                sizeX: x,
                sizeY: y,
                sizeZ: y + z
            };
            var boxes = [boxX, boxY, boxZ];
            var size = function (box) {

                return box.sizeX * box.sizeY * box.sizeZ;
            }

            var i = 0, nr = 0, maxSize = size(boxes[0]);
            for (i = 1; i < boxes.length; i++) {
                if (size(boxes[i]) > maxSize) {
                    maxSize = size(boxes[i]);
                    nr = i;

                }
            }
            return nr + 1;
        },
        // Napisz funkcje zwracajaca obiekt reprezentujacy osobe. Funkcja ma przyjmowac: imie, nazwisko i wiek.
        makePerson: function (firstName, lastName, age) {
            var object = {firstName: firstName, lastName: lastName, age: age};
            return object;
        },
        // Napisz funkcje pobierajaca string i zwracajaca go w odwrotnej kolejnosci
        invertString: function (str) {
            if (typeof str != "string") {
                return false;
            }
            var invStr = "";
            for (var i = 1; i <= str.length; i++) {
                invStr += str.charAt(str.length - i)
            }
            return invStr;
        },
        // Napisz funkcje zwracajaca tablice ktorej wartosci sa wynikami silni danego indeksu
        factorial: function (N) {
            var tab = [];
            tab.push(1);

            for (var i = 1; i <= N; i++) {
                tab.push(tab[i - 1] * i);
            }
            return tab;
        },
        // Napisz funkcje sumujaca parametry od 1 do 5 w podanej klasie przy uzyciu petli.
        sumObject: function (obj) {
            var sum = 0;
            for (var i = 0; i < 5; i++) {
                sum += obj["param" + (i)];
            }
            return sum;
        }




    };


})();