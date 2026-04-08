function showMessage() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Please enter your name");
    } else {
        alert("Thank you " + name + " for contacting us!");
    }
}
