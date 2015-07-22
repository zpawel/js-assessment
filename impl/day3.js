(function () {
    'use strict';


    // You can extend prototypes there.

    //Part I
    String.prototype.countVowels = function(stringValue){
        var i,a = 0;
        for(i=0; i<this.length; i++)
        {
            if(this.charAt(i) === 'a' || this.charAt(i) === 'e' ||
                this.charAt(i) === 'y' || this.charAt(i) === 'u' ||
                this.charAt(i) === 'i' || this.charAt(i) === 'o')
                a++;

        }
        return a;
    }


    //Part II
    Array.prototype.arrayToString = function(array){
        var array = [];
        return this.join(' ');
    }

    //Part III
    Number.prototype.addNumber = function(number) {
        return this.valueOf() + number;
    }


    //Part IV
    Number.prototype.maxValueFromTwoArguments = function(arg0, arg1) {

        if(this > arg0 && this > arg1) {
            return this;
        }
        else if(arg0>arg1 && arg0>this) return arg0;
        else if(arg1>arg0 && arg1> this) return arg1;

    }

    window.day3 = {
        aqurium: {
            fish1: {type: 'fish', name: 'Bibo', weight: 20, sizeFish: 'big' },
            fish2: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish3: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish4: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish5: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            aqurine: 1,
            underwaterTree1: {type: 'tree', height: 5},
            underwaterTree2: {type: 'tree', height: 2},
            underwaterTree3: {type: 'tree', height: 2},
            underwaterTree4: {type: 'tree', height: 2},
            underwaterTree5: {type: 'tree', height: 2},
            underwaterTree6: {type: 'tree', height: 2},
            stone1: {type: 'stone', height: 2},
            stone: 50

        },
        book:
        {
            title: "Kot w butach",
            author: "Jan Kowalski",
            numPages: 149,
            comments: "Good book!",
            delProperty: function(property){
                for(var prop in this){
                    delete this[property];
                }

                return this;
            }
        },

        propertyNames: function(customObject){

            var array = [];
            for(var property in customObject){
                array.push([property, customObject[property]]);
            }
            return array;


        },
        mergeObject: function(mergeTo, mergeFrom){
            for(var x in mergeFrom) {
                    if (typeof mergeTo === 'object' &&  typeof mergeFrom === 'object') {
                        mergeTo[x] = mergeFrom[x];
                    }
                    else
                    return false;
                }

            return mergeTo;
        }


    }

})();