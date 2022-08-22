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
}

// when asked for character types to include in password, 
// user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters

// user answers each prompt, input should then be validated and at least one character type selected

// after answering all prompts, password is generated to match criteria

// once password is generated, it should be displayed on page


// Add even listener to generate button
generateBtn.addEventListener("click", writePassword);