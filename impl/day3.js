/**
 * Created by kronos on 18.08.14.
 */
(function () {
    'use strict';
    Number.prototype.addNumber = function (add) {
        return this + add;
    }


    Number.prototype.maxValueFromTwoArguments = function (first, second) {
        if (this > first && this > second) {

            return this;
        } else if (first > this && first > second) {

            return first;
        } else if (second > this && second > first) {

            return second;
        }
    }

    window.day3 = {

        aqurium: {
            fish1: {type: 'fish', name: 'Bibo', weight: 20, sizeFish: 'big' },
            fish2: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            aqurine: 1,
            underwaterTree1: {type: 'tree', height: 5},
            underwaterTree2: {type: 'tree', height: 2},
            stone: 50

        },

        //Napisz funckje która bęðzie wypisywać ilosc elemtnow w obiekcie jako parametr przyjmuje obiekt i nazwe wlasciwosci

        countPropertiesInObject: function (object, nameProperties) {
            var count = 0;
            for (var fish in object) {
                if (object[fish].type == nameProperties) {
                    count++;
                }
            }
            return count;
        },
        //Napisz funckje ktora wpisze wszystkie nazwy elementow obiektu do tablicy

        writeAllPropertiesObject: function (object) {
            var temp = [];
            for (var properties in object) {
                temp.push(properties);
            }
            return temp;
        },

        //Napisz funkcje ktora zlicza ilosc wystapienia litery w nazwach atrybutów
        countCharInProperties: function (object, letter) {
            var temp = 0;
            for (var properties in object) {
                for (var i = 0; i < properties.length; i++) {
                    if (properties.charAt(i).toUpperCase() == letter.toUpperCase()) {
                        temp++;
                    }
                }
            }
            return temp;
        }


    };
})();