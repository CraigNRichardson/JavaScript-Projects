function TypeOfFunction() {
    var aa = true;
    document.getElementById("TypeOf") .innerHTML = "true is a " + (typeof aa) + " type.";
}

function nanFunction() {
    var a = Number.POSITIVE_INFINITY * 0;
    document.getElementById("NotANumber") .innerHTML = "Infinity times 0 is: " + a; 
}

function isNaNFunction() {
    var b = "Tom Hanks";
    document.getElementById("TomHanks") .innerHTML = "\"Tom Hanks\" is not a number: " + isNaN(b);
}
function isNaNbFunction() {
    var c = 5280;
    document.getElementById("5280") .innerHTML = "5280 is not a number: " + isNaN(c);
}
function PosInfFunction() {
    var d = 1.8976931348623157E308;
    document.getElementById("posinfinity") .innerHTML = "The number 1.8976931348623157E308 is equivalent to " + d + " in JavaScript.";
}
function trueFunction() {
    var e = 10 > 3;
    document.getElementById("BooleanTrue") .innerHTML = "The expression 10 > 3 is: " + e;
}
function falseFunction() {
    var f = 10 < 3;
    document.getElementById("BooleanFalse") .innerHTML = "The expression 10 < 3 is: " + f;
}
console.log(406.1538461538462*13);
function typecoercionFunction() {
    var g = "52";
    document.getElementById("typecoercion") .innerHTML = "The string \"52\" + the integer 80 = " + g + 80;
}
function eqFunction() {
    var h = 5000+280;
    document.getElementById("eqtrue") .innerHTML = "(5000+280) is equivalent (==) to 5280: " + (h == 5280);
}
function eqfFunction() {
    var i = 5000+282;
    document.getElementById("eqfalse") .innerHTML = "(5000+282) is equivalent (==) to 5280: " + (i == 5280);
}
function noteeeqtFunction() {
    var l = "dogs"
    var m = 5280
    document.getElementById("not3eeeqtrue") .innerHTML = "\"dogs\" is equivalent (===) to 5280: " + (l===m);
}
function eeeqtFunction() {
    var j = 5280
    var k = 5280
    document.getElementById("3eeeqtrue") .innerHTML = "5280 is equivalent (===) to 5280: " + (j===k);
}

function noteqbFunction() {
    var n = "5280"
    var o = 5280
    document.getElementById("noteqb") .innerHTML = "\"5280\" is equivalent (===) to 5280: " + (n===o);
}
function noteqcFunction() {
    var p = 5280
    var q = 52800
    document.getElementById("noteqc") .innerHTML = "5280 is equivalent (===) to 52800: " + (p===q);
}
function ttrueFunction() {
    document.getElementById("andand") .innerHTML = "5280 > -5280 && 528 < 5280: " + (5280 > -5280 && 528 < 5280);
}
function ffalseFunction() {
    document.getElementById("andfalse") .innerHTML = "5280 > -5280 && 528 > 5280: " + (5280 > -5280 && 528 > 5280);
}
function not_Function () {
    var x = !(5>10);
    document.getElementById("Not") .innerHTML = "!(5 > 10) is " + x;
}
function aff_Function () {
    var y = !(20>10);
    document.getElementById("Aff") .innerHTML = "!(20 > 10) is " + y;
}

