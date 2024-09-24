
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.innerText = message;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;

    if (username.value.trim() === '') {
        showError(username, 'Username is required');
        isValid = false;
    } else {
        showSuccess(username);
    }

    if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Email is not valid');
        isValid = false;
    } else {
        showSuccess(email);
    }

    if (password.value.trim() === '') {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        showSuccess(password);
    }

    if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, 'Please confirm your password');
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        showSuccess(confirmPassword);
    }

    return isValid;
}
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        alert('Thanks for logging Successfully further information i will send your email');
        
    }
    else{
        setTimeout(() => {
         alert("Fill the all sections");
     },1000);
       }
});