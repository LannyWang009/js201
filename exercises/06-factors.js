// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o

function factors(n){
    //check valid input
    if ( n >=1 ){

    //create an array that will contain all the factors
    var factorArray =[1]

    //create a varaible x 
    var x = 1

    //create a loop
    while (x<n){
        //make x increase by 1 between 1 and n
        x++;
        //if n % x === 0, push x into the array
        if (n % x === 0) {
            factorArray.push(x)
        }
        }
        return factorArray

    } else {
        return "error"
    }
}

//tested in browser console, worked
