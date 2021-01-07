/* user input for criteria  */
var inputPswdChars;
var includeNum;
var incluespChars;
var includeUpper;
var includeLower;

/* where password will be stored */
var password = "";

/* counter for password characters generated */
var passwordCtr = 0;

/* list of numbers and characters */
var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var spCharList = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numList = "1234567890";
var upperCharList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharList = "abcdefghijklmnopqrstuvwxyz";

var generate = document.querySelector("#generate");

// on mouse click on Generate Password, run function so that password will be displayed in text area
generate.addEventListener("click", function () {
    document.getElementById("password").value = generatePassword();
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
      includeNum = confirm("Will the password include numbers?"); // Criteria 1
      includespChars = confirm("Will this include special characters?"); // Criteria 2
      includeUpper = confirm("Will this include uppercase letters?"); // Criteria 3
      includeLower = confirm("Will this include lowercase letters?"); // Critera 4

      // if user did not choose any criteria 
      if (!includeNum && !includespChars && !includeUpper && !includeLower) {
        alert("You must choose a criteria. Please click Generate Password again.");
      }

      else { //generate password characters based on length and critera chosen by user
        // if user selects Criteria 1
        if (includeNum) {
          password = password + numList.charAt(Math.floor(Math.random() * Math.floor(numList.length - 1)));
          passwordCtr ++;
        }

        if (includespChars) {
          for(var i = 0; i < 1; i++)
            password = password + spCharList.charAt(Math.floor(Math.random() * Math.floor(spCharList.length - 1)));
            passwordCtr ++;
        }

        if (includeUpper) {
          for(var i = 0; i < 1; i++)
            password = password + upperCharList.charAt(Math.floor(Math.random() * Math.floor(upperCharList.length - 1)));
            passwordCtr ++;
        }

        if (includeLower) {
          for(var i = 0; i < 1; i++)
            password = password + lowerCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1)));
            passwordCtr ++;
        }

        //generate remaining characters

        for(var i = 0; i < (inputPswdChars-passwordCtr); i++)
        {
            password = password + charList.charAt(Math.floor(Math.random() * Math.floor(charList.length - 1)));      
        }

      }
      console.log(passwordCtr);

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
