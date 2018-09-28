// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare (x) {
    if (x<1) {
        return ''
    } else {
   
    var singleLine = '*'
    for (var i = 1; i<x; i++){ 
        singleLine += '*'
    }
    var display = singleLine
    for (var i=1; i<x; i++){
        display += "\n" + singleLine    
    }
    return display         
}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(x, y) {
    //make sure the input is valid
    if (x >= 1 && y >=1) {
      
    //define the top and bottom line
    var lineA = "*"
    for (var i=1; i<x; i++) {
        lineA += "*"
    }
    //define the hollow lines 
    var lineB = "*"
    for (var i=1; i < (x-1); i++) {
        lineB += " "
    }
    lineB += "*"
    //print the hollow box
    var display = lineA
    if (y>1){
    for (var i = 1; i < (y-1); i++){
        display += "\n" + lineB
    }
    display += "\n" + lineA
    return display

    } else if ( y = 1) {
        display = lineA
        return display
    }
      
} else {
    return ''
}
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(anyString) {
    var dotLine 
    var textLine
    var a = anyString.length + 4
    dotLine = "*"
    var display = ''

    if (anyString.length = 0 ) {
        dotLine = "****"
        textLine = "*  *"
        display = dotLine + "\n" + textLine + "\n" + dotLine
    } else {
        for (var i = 1; i < a; i++){ 
            dotLine += "*"
        }
        textLine = "* " + anyString + " *"
        display = dotLine + "\n" + textLine + "\n" + dotLine
    }
    return display
}

console.log( makeBanner('x'));

