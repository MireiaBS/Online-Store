// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    let fName = document.getElementById("fName");
    let lName = document.getElementById("fLastN");
    let email = document.getElementById("fEmail");
    let password = document.getElementById("fPassword");
    let address = document.getElementById("fAddress");
    let pNumber = document.getElementById("fPhone");
    

    if (fName == "") {
        document.getElementsByClassName("invalid-feedback").display = 'block';

    }
}
