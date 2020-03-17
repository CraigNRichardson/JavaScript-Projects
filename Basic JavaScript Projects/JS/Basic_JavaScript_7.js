var a = 1;
var b = 10;
function sumFunction() {
    
    document.write(b+a + "<br>");
    console.log(b+a)
}
function subFunction() {
    document.write(b-a);
    console.log(b-a);
}
sumFunction();
subFunction();

function dateFunction() {
    if (new Date() .getHours() < 18) {
        document.getElementById("Welcome").innerHTML = "How are you today?";
    }
    if (new Date() .getHours() > 18) {
        document.getElementById("Welcom").innerHTML = "How are you this evening?"
    }
}

function numberFunction() {
    x = document.getElementById("Number").value;
    if (x > 10) {
        document.getElementById("YourNumber").innerHTML = "The number you have chosen is greater than 10."
    }
    if (x < 10) {
        document.getElementById("YourNumber").innerHTML = "The number you have chosen is less than 10."
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function bandFunction() {
    Favorite = document.getElementById("Favorite").value;
    if (Favorite == "The Beatles" || "the beatles") {
        FavoriteB = "John, Paul, George and Ringo would be happy to hear it!";
    }
    else {
        FavoriteB = "John, Paul, George and Ringo would be disappointed to hear that.";
    }
        document.getElementById("FavoriteBand").innerHTML = "You have chosen " + Favorite + ". " + FavoriteB;
}    

function timeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}