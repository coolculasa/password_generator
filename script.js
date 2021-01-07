/* user input for criteria  */
var inputPswd;
var includeNum;
var incluespChars;
var includeUpper;
var includeLower;

/* List of Characters */

/* Special characters */

spChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

/* Numeric characters */
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Alphabetical characters */
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function generatePassword() {
  // ask number of characters from user and store in a variable 
  inputPswd = parseInt(prompt("Choose between 8 and 128 characters for the password"));

  // validate input
  
  //if no value
  if (!inputPswd) {
      alert("This needs a value");
  } else if (inputPswd < 8 || inputPswd > 128) {
      
      inputPswd = parseInt(prompt("Not within the range. Choose between 8 and 128 for the password"));

  } else {
      // prompt for other criteria
      includeNum = confirm("Will the password include numbers?");
      includespChars = confirm("Will this include special characters?");
      includeUpper = confirm("Will this include uppercase letters?");
      includeLower = confirm("Will this include lowercase letters?");
  };


}
