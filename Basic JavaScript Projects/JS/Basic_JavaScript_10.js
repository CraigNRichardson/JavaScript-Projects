function Call_Loop() {
var papers = ["New York Times", "Wall Street Journal", "Washington Post"];
var i = 0;
var text = "";
while (papers[i]) {
    text += papers[i] + "<br>";
    i++;
}
document.getElementById("Loop").innerHTML = text;
}

function lengthFunction() {
    var string1 = document.getElementById("string1").value;
    var n = string1.length;
    document.getElementById("stringlength").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var i;
function for_Loop() {
    for (i=0; i < Instruments.length; i++) {
        Content += Instruments[i] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var President = [];
    President[0] = "George Washington";
    President[1] = "John Adams";
    President[2] = "Thomas Jefferson";
    President[3] = "James Madison";
    document.getElementById("Array").innerHTML = "The third president of the United States was " + President[2] + ".";
}

function constant_function() {
    const President = {name:"Thomas Jefferson", term:"1801-1809", vicepresident:"Aaron Burr"};
    President.vicepresident = "George Clinton";
    President.party = "Democratic Republican";
    document.getElementById("Constant").innerHTML = President.name + " served as the third president of the United States from "
     + President.term + "." + " His political party was " + President.party +". Aaron Burr and " + President.vicepresident
     + " served as his two Vice Presidents.";
}

function letFunction() {
    var vicepres = "Aaron Burr";
    {
        let vicepres = "George Clinton";
    }
    document.getElementById("let").innerHTML = vicepres;
}

window.onload = function()
{

    var x = returnFunction(8, 8);
    function returnFunction(a, b) {
    return a *b;
}
document.getElementById("demo").innerHTML = x;
}

window.onload = function()
{
let president = {
    name: "George Washington ",
    term: "1789 - 1797 ",
    party: "Unafiliated ",
    vp: "John Adams ",
    description : function() {
        return this.name + "served as president of the United States from " + this.term
        + "and his vice president was " + this.vp;
    }
};
document.getElementById("presidentobject").innerHTML = president.description();
}

window.onload = function()
{
var text = "";
var i;
for (i = 0; i < 30; i++) {
  if (i === 13) { break; }
  text += "The numeral is " + i + "<br>";
}
document.getElementById("List_of_NumeralsBreak").innerHTML = text;
}

window.onload = function()
{
var textcont = "";
var int;
for (int = 0; int < 30; int++) {
  if (int === 25) { continue; }
  textcont += "The numeral is " + int + "<br>";
}
document.getElementById("List_of_NumberalsContinue").innerHTML = textcont;
}