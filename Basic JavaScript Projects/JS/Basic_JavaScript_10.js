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