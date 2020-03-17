function fullFunction() {
    part1="To begin at the beginning: ";
    part2="It is spring, moonless night the small town, ";
    part3="starless and bible-black, the cobblestreets silent and the hunched, ";
    part4="courters'-and-rabbits' wood limping invisible down to the sloeblack, ";
    part5="slow, black, crowblack, fishingboatbobbing sea."
    whole = part1.concat(part2, part3, part4, part5);
    document.getElementById("concatenate").innerHTML = whole;
}

function sliceMethod() {
    sentence = "A grand ubiquity enchants the lower mind while partitioning the greater consciousness.";
    section = sentence.slice(2,7);
    document.getElementById("slice").innerHTML = section;
}

function upperMethod() {
    string = "this is some text that is here for the purpose of demonstrating the toUpperCase method.";
    upper = string.toUpperCase();
    document.getElementById("text").innerHTML = upper;
}

function searchMethod() {
    string = "Is this a dagger which I see before me, the handle toward my hand?";
    n = string.search(document.getElementById("search").value);
    document.getElementById("indexresult").innerHTML = n;
}

function stringMethod() {
    var number = document.getElementById("num").value;
    var strnumber = number.toString();
    document.getElementById("numstring").innerHTML = strnumber + " is now a string!";
    console.log(typeof strnumber);
}

function precisionMethod() {
    var num = 3.141592653589793238462643383279;
    var pnumber = document.getElementById("pnumber").value;
    document.getElementById("result").innerHTML = num.toPrecision(pnumber);
}

function fixedMethod() {
    var num = 1.6180339887498948482045868343656381177203;
    var decnumber = document.getElementById("decnumber").value;
    document.getElementById("fixedresult").innerHTML = num.toFixed(decnumber);
}

function valueofMethod() {
    var string1 = "pi"
    var string2 = "phi"
    if (string1.valueOf() == string2.valueOf()) {
        document.getElementById("valueofeq").innerHTML = "Pi and Phi are equal."
    }
    else {
        document.getElementById("valueofeq").innerHTML = "Pi and Phi are not equal."
    }
}