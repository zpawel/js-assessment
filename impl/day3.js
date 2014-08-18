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


    // Do typu string dopisz  funkcje zliczajaca samogloski w dowolnym strungu
    String.prototype.countVowels = function () {
        var count = 0;
        var tmp = this.toLocaleLowerCase();
        for (var i = 0; i < this.length; i++) {
            if (tmp.charAt(i) == "a" || tmp.charAt(i) == "e" || tmp.charAt(i) == "i" || tmp.charAt(i) == "o" || tmp.charAt(i) == "y" || tmp.charAt(i) == "u") {
                count++;
            }

        }
        return count;

    };
    // Do typu array dopisz funkce zlepiajaca wszystkie elementy tablicy w jeden string. Separatorem jest spacja
    Array.prototype.arrayToString = function () {
        var str = "";
        for (var i = 0; i < this.length; i++) {
            str += this[i] + " ";
        }
        str = str.substring(0, str.length - 1);
        return str;

    };

    window.day3 = {
        // Dopisz funkcje w srodku obiektu usuwajaca z podanego obiektu wybrany atrybut i zwracajacy zmodyfikowany obiekt
        book: {
            title: "Kot w butach",
            author: "Jan Kowalski",
            numPages: 149,
            comments: "Good book!",

            // ...
            delProperty: function (property) {
                delete this[property];
                return this;
            }

        },

        // Napisz funkcje przyjmujaca dowolny obiekt i zwrawacaja w tablicy stringow nazwy atrybutow danego obiektu oraz ich wartosc
        propertyNames: function (obj) {
            var properties = [];
            for (var prop in obj) {
                properties.push([prop, obj[prop]]);
            }
            return properties;
        },

        // Napisz funkcje laczaca dwa dowolne obiekty (wszystkie atrybuty w jednym obiekcie)
        mergeObject: function (obj1, obj2) {
            if (typeof obj1 != "object" || typeof obj2 != "object") {
                return false;
            }
            for (var prop in obj2) {
                obj1[prop] = obj2[prop];
            }

            return obj1;
        },
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