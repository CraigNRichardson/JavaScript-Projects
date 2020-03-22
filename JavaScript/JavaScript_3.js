function displayType(president) {
    var presidentType = president.getAttribute("data-president-type");
    alert(presidentType + " was a member of the " + president.innerHTML + " party.");
}
