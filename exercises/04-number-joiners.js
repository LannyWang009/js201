// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
/*
   write function samplejoiner(x) -->x_x+1
   function samplejoiner (x) {
       return (String(x) + "_" + String(x+1))
   }
- worked;
   do the more complicated version
   function samplejoiner2(a,b) {
       var x = String (a)
       while (a < b) {
           a++;
           x += "_" +String(a)
       }
       return x
   }
- worked; tested samplejoiner2(2,15)
*/

function numberJoinerWhile (number1, number2) {
    if (number1 > number2) {
        return "error, number 1 must be smaller than number 2."
    } else {
        var x = String (number1)
        while (number1 < number2) {
            number1++;
            x += "_" + String (number1)
        }
        return x
    }
}
//console.log(numberJoinerWhile(2,20))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor(number1, number2) {
    if (number1 > number2) {
        return "error, number 1 must be smaller than number 2."
    } else {
        var x = String(number1);
        var i;
        var a = number1;
        for (i=0; i < (number2-number1); i++) {
            a++
            x += "_" + String (a);
        }
        return x
    }
}
console.log(numberJoinerFor(1,2))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

function numberJoinerFancy (number1, number2, anyString) {
    if (number1 > number2) {
        return "error, number 1 must be smaller than number 2."
    } else {
        var x = String (number1)
        while (number1 < number2) {
            number1++;
            if (anyString !== undefined){
                x += String(anyString) + String(number1)
            } else {
                x += "_" + String(number1)
            }
        }
        return x
    }
}
//console.log(numberJoinerFancy(2,10,' <3 <3 <3 '))