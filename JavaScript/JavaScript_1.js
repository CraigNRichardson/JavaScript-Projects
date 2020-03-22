function favFunction() {
    var pres_output;
    var presidents = document.getElementById("presidents").value;
    var president_string = " is an interesting choice!";
    switch(presidents) {
        case "George Washington":
            pres_output= "George Washington" + president_string;
        break;
        case "John Adams":
            pres_output= "John Adams" + president_string;
        break;
        case "Thomas Jefferson":
            pres_output= "Thomas Jefferson" + president_string;
        break;
        case "James Madison":
            pres_output= "James Madison" + president_string;
        break;
        default:
        pres_output = "Please select one of the presidents in the list.";
    }
    document.getElementById("output").innerHTML = pres_output;
}


function vpFunction() {
    var VP = document.getElementsByClassName("change");
    VP[0].innerHTML = "John Adams";
    VP[1].innerHTML = "Thomas Jefferson";
    VP[2].innerHTML = "Aaron Burr & George Clinton";
    VP[3].innerHTML = "George Clinton & Elbridge Gerry";
}

window.onload = function()
{
var canvas = document.getElementById("can");
context = canvas.getContext("2d");

make_herschel();

function make_herschel()
{
herschel_image = new Image();
herschel_image.src = "http://www.bbvaopenmind.com/wp-content/uploads/2018/02/Herschel-1.jpg";
herschel_image.onload = function(){
    context.drawImage(herschel_image, 0, 0);
}
}
}

window.onload = function()
{
var canlingrad = document.getElementById("gradcan");
contextln = canlingrad.getContext("2d");

var grd = contextln.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

contextln.fillStyle = grd;
contextln.fillRect(0, 0, 570, 340);
}