// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

/*
Break into 3 steps: 
1)convert all strings into unicode, name the array "conversion"
2)In conversion string, if the unicode falls between /a-z/, (n+key)%97 + 97
if the unicode falls in symbol range, don't change;
(should be able to use SWITCH function)

*/

//Should use only one for loop

function cipher(inputString, inputIdx) {
//step1 define all the variables and convert to unicode
var plaintext = inputString;
var key = inputIdx;
var conversion = [];
var conversion2 = [];
var outputString = "";
     //conversion
     //plaintext.charCodeAt(i) is an expression of the number in position i. 
for (var i=0; i < plaintext.length; i++){
    conversion.push(plaintext.charCodeAt(i));
     }
//step 2
var n;
for (var i=0; i < plaintext.length; i++){
    n = conversion[i];
    if ( 97 <= n <= 122) {
    n = (n - 97 + 26 + key) % 26 + 97        
     } else if (65 <= n <= 90) {
    n = (n - 65 + 26 + key) % 26 + 65
     } else {n = n}

    conversion2.push(n); //push n to the new array 'conversion2' of UTF-8 numbers
    }

//step 3 convert the UTF-8 numbers back to string
outputString = String.fromCharCode(conversion2);
return outputString;
}
/* test
cipher ('My name is red.', 4), 
conversion = [77, 121, 32, 110, 97, 109, 101, 32, 105, 115, 32, 114, 101, 100, 46]
worked */
console.log(cipher('My name is red.', 4));











// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
