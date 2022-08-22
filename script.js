// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    // prompted for length of password, choice is between 8 - 12
    passwordLength = prompt('What password length would you like to generate? (8 - 12)');
    if (passwordLength < 8 || passwordLength > 128) {
        alert('password length must be between 8 - 12 characters');
        // confirm input
        return generatePassword();
    }
// upon clicking button to generate password, user is presented with series of prompts for password criteria
// then criteria is selected by user to be included in password
if (passwordLength >= 8 && passwordLength <= 12) {
    var upper = confirm('has uppercase letters?');
    var lower = confirm('has lowercase letter?');
    var numbers = confirm('has numbers?');
    var special = confirm('has special characters?');
    }
// prompt to choose at least one character type if no character types are selected
if (!upper && !lower && !numbers && !special) {
    alert(' at least one character type needs to be selected to generate password');
    // confirm input
    return generatePassword();
}
// code for all available character options
if (lower) {
    var lower = 'abcdefghijklmnopqrstuvwxyz'
} else {
    var lower = '';
}
if (upper) {
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
} else {
    var upper = '';
}
if (numbers) {
    var numbers = '0123456789';
} else {
    var numbers = '';
}
if (special) {
    var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
} else {
    var special = '';
}

var possible = lower + upper + numbers + special;

// after answering all prompts, password is generated to match criteria
var password = '';
for (var i = 0; i < passwordLength; i++) {
    var realRandom = possible[Math.floor(Math.random() * possible.length)];
    password += realRandom;
}
    return password;
}

// once password is generated, it should be displayed on page
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}



// Add even listener to generate button
generateBtn.addEventListener("click", writePassword);