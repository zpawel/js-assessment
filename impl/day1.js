(function () {
    'use strict';

    window.day1 = {

    function getDescendingNumbers(numberFrom, numberTo){
        if(numberFrom>numberTo){
            var i;
            for (i=numberFrom;i>=numberTo;i--)
                console.log(i + " ");
        }else
            console.log("numberFrom powinno byæ wiêksze od nubmerTo");
    }

    function deleteStr(stringToDelete, arrayOfStrings){
        var i;
        for(i=0;i<arrayOfStrings.length;i++){
            if (arrayOfStrings[i]==stringToDelete)
        		arrayOfStrings.splice(i,1);
        }
    }

    function stringCounter(customArray){
        var x = 0;
        for (var obj of customArray){
            if(typeof(obj) == 'string')
                a++;
        }
        console.log(x);
    };

    function squareOdd(customArray){
    	var i=0;
    	for(i=0;i<customArray.length;i++){
    		if(customArray[i]%2 == 0){
    			customArray[i] = Math.pow(customArray[i],2)
    		}
    	}
       	console.log(customArray);
    }

    function trapezeSquare(a,b,h){
    	var x = h * ( a + b ) / 2;
    	console.log(x);
    }
})();

