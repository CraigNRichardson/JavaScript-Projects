function randomFunction() {
    var x = (Math.random() * 100);
    document.getElementById("Math") .innerHTML = "Your random number is: " + Math.floor(x);
}

function SumFunction() {
    var sum = 70 + .7;
    document.getElementById("MathSum") .innerHTML ="The sum of 70 and 0.7 is:  " +sum;
}

function SubFunction() {
    var sub = 70 - .7;
    document.getElementById("MathSub") .innerHTML ="The result of 70 minus 0.7 is:  " +sub;
}

function MultFunction() {
    var mult = 70 * .7;
    document.getElementById("MathMult") .innerHTML ="The product of 70 and 0.7 is:  " +mult;
}
function DivFunction() {
    var div = 70 / .7;
    document.getElementById("MathDiv") .innerHTML ="The product of 70 and 0.7 is:  " +div;
}
function PEMDASFunction() {
    var pem = 8 / 2*(2+2);
    document.getElementById("MathPEMDAS") .innerHTML ="The result of 8 / 2(2+2) is:  " +pem;
}
function ModFunction() {
    var mod = 70 % .7;
    document.getElementById("MathMod") .innerHTML ="The remainder when 70 is divided by .7 is:  " +mod;
}

function NegFunction() {
    var neg = 70;
    document.getElementById("MathNeg") .innerHTML = -neg;
}

function increment() {
    for(var i=1; i <= 10; i++) {
        document.getElementById("MathInc") .innerHTML = i;
}
}

function decrement() {
    for(var b=10; b >= 1; b--) {
        document.getElementById("MathDec") .innerHTML = b;
}
}
