function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote") .innerHTML = Can_vote + " to vote.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function driveFunction() {
    document.getElementById("New_and_This") .innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye; 
}
var myFather = new Person("Paul", "Richardson", 66, "hazel");
var myMother = new Person("Kathleen", "Richardson", 67, "Blue");

function VolumeFunction() {
    d = document.getElementById("diameter").value;
    function radiusFunction() {
    return(d/2)
    }
    var r = radiusFunction();
    var v = 4/3 * 3.1415926535 * r**3;
    document.getElementById("volume") .innerHTML = "The volume of the sphere is: " + v;
}  
