/**
 * Created by kronos on 25.08.14.
 */
(function () {
    'use strict';


    window.day5 = {
//  Stworz obiekt ARMORY w ktorym beda  istanialy dwie zmienne prywatne takie jak availableWeapon=['123'], availableArmory=['123'](zainicjowany dla testów)  bedą one tablicami stringow
//  dopisz do tego metody publiczne ktore będą dodawać nowe zbroje i bronie jak też usuwać z nich,gdzie dopuszczalne zboje to "Heavy Armor" i "Light Armor"
//  a dopuszczalne bronie to 'M-16' i 'M-22'


        ARMORY: (function () {
            var availableWeapon = ['123'];
            var availableArmory = ['123'];

            return{
//                Napisz funkcje która będzie dodawać pancerze do listy availableArmory jako kolejne elementy tablicy
//                jako parametr może przyjmować pojedynczy string lub tablice

                addArmory: function (addArmory) {
                    var heavyA = 'Heavy Armor', lightA = 'Light Armor';
                    if (heavyA === addArmory || lightA === addArmory) {
                        availableArmory.push(addArmory);
                        return 0;
                    } else if (addArmory instanceof Array) {
                        for (var i = 0, x = addArmory.length; i < x; i++) {
                            if (lightA === addArmory[i] || heavyA === addArmory[i]) {
                                availableArmory.push(addArmory[i]);


                            } else {
                                return -1;
                            }
                        }
                    } else {
                        return -1;
                    }
                },
//                Napisz funkcje która będzie dodawać bronie do listy availableWeapon jako kolejne elementy tablicy
//                jako parametr może przyjmować pojedynczy string lub tablice

                addWeapon: function (addWeapon) {
                    var possibleWeapon1 = 'M-16', possibleWeapon2 = 'M-22';
                    if (possibleWeapon1 === addWeapon || possibleWeapon2 === addWeapon) {
                        availableWeapon.push(addWeapon);
                        return 0;
                    } else if (addWeapon instanceof Array) {
                        for (var i = 0, x = addWeapon.length; i < x; i++) {
                            if (possibleWeapon1 === addWeapon[i] || possibleWeapon2 === addWeapon[i]) {
                                availableWeapon.push(addWeapon[i]);

                            } else {
                                return -1;
                            }
                        }
                    } else {
                        return -1;
                    }
                },
//                Napisz funckje która będzie wyjmować z tablicy bron i zwracac jeśli ją znajdzie jako parametr może przyjmować
//                string, jeśli natomiast nie znajdzie zwraca undefined

                getWeapon: function (takeWeapon) {

                    for (var i = 0, x = availableWeapon.length; i < x; i++) {
                        if (availableWeapon[i] == takeWeapon) {
                            availableWeapon.splice(i, 1);

                            return takeWeapon;
                        } else {
                            return;
                        }
                    }
                },
//                Napisz funckje która będzie wyjmować z tablicy pancerz i zwracac jeśli ją znajdzie jako parametr może przyjmować
//                string, jeśli natomiast nie znajdzie zwraca undefined
                getArmory: function (takeArmory) {
                    var x = availableArmory.indexOf(takeArmory);
                    if (0 <= x) {
                        availableArmory.splice(x, 1);

                        return takeArmory;
                    } else {
                        return;
                    }

                },
//                Napisz funckje ktora będzie czyścić tablicę availableArmory i zwracać 0
                flushArmory: function () {
                    availableArmory = [];
                    return 0;
                },
//                Napisz funckje ktora będzie czyścić tablicę availableWeapon i zwracać 0
                flushWeapon: function () {
                    availableWeapon = [];
                    return 0;
                },
//                Napisz funckje która będzie zwracać tablicę availableArmory która jest prywatna
                writeAllArmory: function () {

                    return availableArmory;
                },
//                Napisz funckje która będzie zwracać tablicę availableWeapon która jest prywatna
                writeAllWeapon: function () {
                    return availableWeapon;
                }
            };
        })()
    }

})();