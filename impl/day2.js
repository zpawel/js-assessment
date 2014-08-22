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


        //Napisz funkcje która wykorzytuje tablice wyrażeń funkcyjnych i modyfikuje podana tablice liczb mnożąc liczby
        //o indeksach parzystych przez 3 ,a nieparzystych przez 4
        multiplyElementOfArray: function (tab) {
            var fun = [function (a) {
                return a * 3;
            }, function (a) {
                return a * 4
            }];
            for (var i = 0; i < tab.length; i++) {
                if (typeof tab[i] == "number") {
                    if (i % 2 == 0) {

                        tab[i] = fun[0](tab[i]);

                    } else {

                        tab[i] = fun[1](tab[i]);

                    }
                }

            }
            return tab;
        },

        //Napisz funkcje zwracajaca maksymalny element z tablicy
        maxArray: function (tab) {
            var max = tab[0];
            for (var i = 0; i < tab.length; i++) {
                if (typeof tab[i] == "number") {
                    if (tab[i] > max) {
                        max = tab[i];
                    }
                } else {
                    return false;
                }
            }
            return max;

        },

        //Napisz funckje podmieniająca wybrany string w tablicy stringów
        swapString: function (tab, stringToSwap, stringToAdd) {
            for (var i = 0; i < tab.length; i++) {
                if (tab[i] == stringToSwap) {
                    tab[i] = stringToAdd;
                    return tab;
                }
            }
            return false;

        },

        //Napisz funkcje zwracajaca obiekt o określonej nazwie z tablicy obiektów
        getObject: function (list, name) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].name == name) {
                    return list[i];
                }
            }
            return false;

        },

        //Napisz funkcje modyfikujaca liste osob w taki sposób, że osoba ponizej 18 lat zostaje wpisane 18.
        //Pozostale informacje są niemodyfikowane
        doAdult: function (list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].age < 18) {
                    list[i].age = 18;
                }
            }
        }

    };
})();