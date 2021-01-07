/* user input for criteria  */
var inputPswdChars;
var includeNum;
var incluespChars;
var includeUpper;
var includeLower;

/* where password will be stored */
var password = "";

/* consolidated list of numbers and characters - alphabets and special characters */

charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var generate = document.querySelector("#generate");

// on mouse click on Generate Password, run function so that password will be displayed in text area
generate.addEventListener("click", function () {
    document.getElementById("password").placeholder = generatePassword();
});

function generatePassword() {

  // ask number of characters from user and store in a variable 
  inputPswdChars = parseInt(prompt("Choose between 8 and 128 characters for the password"));

  // validate input
  if (!inputPswdChars) { //if no value
    alert("This cannot be blank. Please click Generate Password again.");
  }

  else if (inputPswdChars < 8 || inputPswdChars > 128) {
      
      inputPswdChars = alert("Not within the range. Please click Generate Password again.");
  }
  
  else {
  // prompt for other criteria
      includeNum = confirm("Will the password include numbers?");
      includespChars = confirm("Will this include special characters?");
      includeUpper = confirm("Will this include uppercase letters?");
      includeLower = confirm("Will this include lowercase letters?");

      // if user did not choose any criteria 
      if (!includeNum && !includespChars && !includeUpper && !includeLower) {
        alert("You must choose a criteria. Please click Generate Password again.");
      }

      else {
        //generate password characters based on length chosen by user
        for(var i = 0; i < inputPswdChars; i++)
        {
          password = password + charList.charAt(Math.floor(Math.random() * Math.floor(charList.length - 1)));
          
        }
      }
  }

  return password;
}

// on mouse click on Copy to Clipboard, run function so that password will be copied to clipboard
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
  });

//function to copy password to clipboard
function copyPassword(){
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password has been copied to clipboard.");

}
