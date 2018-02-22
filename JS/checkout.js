function validateForm() {
    var firstName = document.forms["myForm"]["fname"].value;
    if (firstName == "") {
        alert("First Name must be filled out");
        return false;
    }
    var lastName = document.forms["myForm"]["lname"].value;
    if (lastName == "") {
        alert("Last Name must be filled out");
        return false;
    }
    var email= document.forms["myForm"]["mail"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    var address = document.forms["myForm"]["address"].value;
    if (address == "") {
        alert("Street address must be filled out");
        return false;
    }
    var zip = document.forms["myForm"]["zip"].value;
    if (zip == "") {
        alert("Zip code must be filled out");
        return false;
    }
    var city = document.forms["myForm"]["city"].value;
    if (city == "") {
        alert("City must be filled out");
        return false;
    }
}