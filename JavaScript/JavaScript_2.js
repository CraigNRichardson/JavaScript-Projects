function validateForm() {
    var fn = document.forms["myForm"]["firstname"].value;
    if (fn == "") {
        alert("First Name must be filled out");
        return false;
    }
}