(function () {
    'use strict';

    window.day2 = {

        diffqube: function (a, b) {

            return a * a * a - b * b * b;


        },

        przydz: function (wzrost) {

            if (wzrost >= 160) {
                console.log("Jestes niskiego wzrostu");
            }
            else if (wzrost <= 180) {
                console.log("Jestes sredniego wzrostu");
            }
            else if (wzrost <= 220) {
                console.log("Jestes Wysoki");
            }
        },


        fx: function (tab) {
            for (var i = 0; i >= tab.length; i++) {
                tab[i] = tab[i] * 3;
                return tab[i];
            }

        },

        names: function (FL) {

            return FL[0] + " " + FL[1];
        },

        f1: function (a) {
            return a = a * 2;
        },

        f2: function (b) {
            return b = b + "!";
        },

        // Napisz funkcje ktora otrzymjuje w alercie komunikat ("Podales nr:" + numer) po podanu go przez uzytkownika. Numery: od 1-3.

        choice: function (wartosc) {
            if (wartosc == 1) {
                return function () {
                    alert("Podales 1");
                };
            }
            else if (wartosc == 2) {
                return function () {
                    alert("Podales 2");
                };
            } else if (wartosc == 3) {
                return function () {
                    alert("Podales 3");
                }
            }
        },

        //Napisz funkcje ktora przyjmuje wartosci z klawiatury i wpisuje je w tablice 4el.

        array: function (tab) {
            for (var i = 0; i <= 3; i++) {

                tab[i] = prompt("prosze podac wartosc");
                i++;

            }
        },

        //Pomnoz tablice przez 2, wynik zapisz w drogiej tablicy

        tabX: function (tab1) {

            for (var i = 0; i <= 3; i++) {
                tab2[i] = tab1[i] * 2;

            }

        },

        //Napisz funkcje ktora bedzie wyswietlala komunikat "Uwaga na + obiekt + !!!"obiekt mozebyc przykladowo: pies
        warning: function (obiekt) {

            alert("Uwaga na " + obiekt + " !!!");
        },


        //Napisz program ktory rozpoznaje liczby parzyste wpisane z klawiatury.

        evenNumbers: function (number) {

            if (number % 2 == 0) {
                alert("Numer: " + number + " jest parzysty!");
            }
            else {
                alert("Numer: " + number + " jest nieparzysty!");
            }
        }

    };
})();
