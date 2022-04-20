    
let fName = document.getElementById("fName");
let lName = document.getElementById("fLastN");
let email = document.getElementById("fEmail");
let password = document.getElementById("fPassword");
let pNumber = document.getElementById("fPhone");
let address = document.getElementById("fAddress");

function validate(e) {

    e.preventDefault();

    const expRegMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let isValidEmail = expRegMail.test(email.value);

    const expRegPhone = /[^0-9]/;
    let noValidPhone = expRegPhone.test(pNumber.value);
    
    const expRegfName = /[0-9]/;
    let noValidfName = expRegfName.test(fName.value);

    const expReglName = /[0-9]/;
    let noValidlName = expReglName.test(lName.value);

    const expRegPass = /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{3,10}$/;
    let validPass = expRegPass.test(password.value);
          
    if (fName.value == '' || noValidfName || fName.value.length < 3 ) {
        fName.classList.add('is-invalid');        
    } else {
        fName.classList.add('is-valid');
        fName.classList.remove('is-invalid');
    }

    if (lName.value == '' || noValidlName || lName.value.length < 3 ) {
        lName.classList.add('is-invalid');        
    } else {
        lName.classList.add('is-valid');
        lName.classList.remove('is-invalid');   
    }

    if (email.value == '' || isValidEmail == false || email.value.length < 3) {
        email.classList.add('is-invalid');
    } else {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
    }

    if (password.value == '' || validPass == false || password.value.length < 3) {
        password.classList.add('is-invalid');
    } else {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
    }

    if (pNumber.value == '' || noValidPhone || pNumber.value.length != 9) {
        pNumber.classList.add('is-invalid');
    } else {
        pNumber.classList.add('is-valid');
        pNumber.classList.remove('is-invalid');
    }

    if (address.value == '' || address.value.length < 3) {
        address.classList.add('is-invalid');
    } else {
        address.classList.add('is-valid');
        address.classList.remove('is-invalid');
    }
    
}

